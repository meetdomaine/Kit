const util = require('util')
const exec = util.promisify(require('child_process').exec)
const { getBranch, pathExists, emptyDir, copyPath, readJson } =
  require('@halfhelix/configure').utils
const { error, completedAction } = require('@halfhelix/terminal-kit')

/**
 * Prepares the build folder with the remote repository version
 * of the built files. This allows us to layer on the new versions
 * of the files while keeping a linear commit history.
 *
 * We use this function for both the source > build sync, and
 * the build > source sync.
 *
 * @param {Object} settings
 * @param {String} repoUrlSettingName
 * @param {String} directorySettingName
 * @returns Boolean
 */
async function prepareRepo(settings, repoUrlSettingName, directorySettingName) {
  if (!settings[repoUrlSettingName]) {
    error(
      new Error(`The required "${repoUrlSettingName}" setting is not set`),
      false,
      true
    )
  }
  const branch = await settings['git.getBranch'](settings, getBranch)
  emptyDir(settings[`path.${directorySettingName}`])
  ;({ stdout, stderr } = await exec(
    `git init ${settings[`path.${directorySettingName}`]} --initial-branch noop`
  )),
    !stderr ? completedAction(stdout.trim()) : error(stderr)
  ;({ stdout, stderr } = await exec(
    `cd ${settings[`path.${directorySettingName}`]} && git remote add slave ${
      settings[repoUrlSettingName]
    }`
  )),
    !stderr
      ? completedAction(`Added remote ${settings[repoUrlSettingName]}`)
      : error(stderr)

  try {
    await exec(`git ls-remote --exit-code -h "${settings[repoUrlSettingName]}"`)
  } catch (e) {
    error(
      new Error(`Could not read from ${settings[repoUrlSettingName]}`),
      false,
      true
    )
  }
  completedAction(`Successfully pinged ${settings[repoUrlSettingName]}`)
  await exec(
    `cd ${settings[`path.${directorySettingName}`]} && git fetch slave`
  )
  completedAction(`Ran "git fetch slave" in ${directorySettingName} directory`)
  if (
    pathExists(
      `${
        settings[`path.${directorySettingName}`]
      }/.git/refs/remotes/slave/${branch}`
    )
  ) {
    await exec(
      `cd ${settings[`path.${directorySettingName}`]} && git checkout ${branch}`
    )
    completedAction(
      `Successfully checked out existing ${branch} in ${directorySettingName} directory`
    )
    return true
  } else {
    await exec(
      `cd ${
        settings[`path.${directorySettingName}`]
      } && git checkout -b ${branch}`
    )
    completedAction(
      `Successfully checked out new ${branch} in ${directorySettingName} directory`
    )
    return false
  }
}

/**
 * Checks to see if there are new files to update
 * on the remote and if so, attempts to commit and
 * push these new updates.
 *
 * @param {Object} settings
 * @param {String} directorySettingName
 * @param {Boolean} remoteBranchExists
 */
async function commitFilesAndPush(
  settings,
  directorySettingName,
  remoteBranchExists
) {
  const branch = await settings['git.getBranch'](settings, getBranch)
  ;({ stdout, stderr } = await exec(
    `cd ${settings[`path.${directorySettingName}`]} && git status`
  ))
  if (
    !~stdout.indexOf('Changes not staged for commit') &&
    !~stdout.indexOf('Untracked files') &&
    remoteBranchExists
  ) {
    completedAction('There are no new changes to push to remote')
    return
  }
  ;({ stdout, stderr } = await exec(
    `cd ${
      settings[`path.${directorySettingName}`]
    } &&  git add . && git commit -am "${settings[
      'git.builtThemeCommitMessage'
    ](settings, directorySettingName === 'dist')}"`
  )),
    !stderr
      ? completedAction(
          `Committing new updates to ${directorySettingName} repo`
        )
      : error(stderr)
  await exec(
    `cd ${
      settings[`path.${directorySettingName}`]
    } && git push slave --set-upstream ${branch}`
  )
  completedAction('Updates pushed to remote')
}

module.exports.commitFilesAndPush = commitFilesAndPush

module.exports.prepareDistRepo = async (settings) => {
  return await prepareRepo(settings, 'git.githubRepositoryUrl', 'dist')
}

module.exports.prepareTempRepo = async (settings) => {
  return await prepareRepo(settings, 'git.gitlabRepositoryUrl', 'temp')
}

/**
 * This is intended to be called after the theme has been
 * built. Here, we take the new versions of file/s and push
 * them up to Github.
 *
 * @param {String} settings
 * @param {Boolean} remoteBranchExists
 * @returns
 */
module.exports.commitAndPush = async (settings, remoteBranchExists) => {
  settings['git.filesToCopyToGithub'].forEach((file) => {
    if (pathExists(`${settings['path.cwd']}/${file}`)) {
      copyPath(
        `${settings['path.cwd']}/${file}`,
        `${settings['path.dist']}/${file}`
      )
    }
  })
  await commitFilesAndPush(settings, 'dist', remoteBranchExists)
}

module.exports.copyOverBuiltFiles = async (settings) => {
  const branch = await settings['git.getBranch'](settings, getBranch)
  const { stdout: gitManagedFiles } = await exec(
    `git ls-tree -r ${branch} --name-only`
  )
  if (!pathExists(`${settings['path.cwd']}/${settings['path.mapping-json']}`)) {
    error(
      new Error(`The ${settings['path.mapping-json']} file is required`),
      false,
      true
    )
  }
  const mappings = readJson(
    `${settings['path.cwd']}/${settings['path.mapping-json']}`
  )
  gitManagedFiles.split('\n').forEach((file) => {
    if (!/^\//.test(file)) {
      file = `/${file}`
    }
    if (mappings[file]) {
      copyPath(
        `${settings['path.cwd']}${file}`,
        `${settings['path.temp']}/src/${mappings[file]}`
      )
    } else {
      settings['git.mapNewFileSrcLocation'](file, settings) &&
        copyPath(
          `${settings['path.cwd']}${file}`,
          `${settings['path.temp']}/src/${settings['git.mapNewFileSrcLocation'](
            file,
            settings
          )}`
        )
    }
  })
}
