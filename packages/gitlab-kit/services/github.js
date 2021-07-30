const util = require('util')
const exec = util.promisify(require('child_process').exec)
const { getBranch, pathExists, movePath, outputFile, appendToFile, emptyDir } =
  require('@halfhelix/configure').utils
const {
  log,
  error,
  title,
  subtitle,
  newLines,
  completedAction
} = require('@halfhelix/terminal-kit')

module.exports.prepareDistRepo = async (settings) => {
  if (!settings['git.githubRepositoryUrl']) {
    error(
      new Error('The required `git.githubRepositoryUrl` setting is not set'),
      false,
      true
    )
  }
  const branch = await settings['git.getBranch'](settings, getBranch)
  emptyDir(settings['path.dist'])
  ;({ stdout, stderr } = await exec(
    `git init ${settings['path.dist']} --initial-branch noop`
  )),
    !stderr ? completedAction(stdout.trim()) : error(stderr)
  ;({ stdout, stderr } = await exec(
    `cd ${settings['path.dist']} && git remote add github ${settings['git.githubRepositoryUrl']}`
  )),
    !stderr
      ? completedAction(`Added remote ${settings['git.githubRepositoryUrl']}`)
      : error(stderr)

  try {
    await exec(
      `git ls-remote --exit-code -h "${settings['git.githubRepositoryUrl']}"`
    )
  } catch (e) {
    error(
      new Error(`Could not read from ${settings['git.githubRepositoryUrl']}`),
      false,
      true
    )
  }
  completedAction(`Successfully pinged ${settings['git.githubRepositoryUrl']}`)
  await exec(`cd ${settings['path.dist']} && git fetch github`)
  completedAction(`Ran "git fetch github" in dist directory`)
  if (
    pathExists(`${settings['path.dist']}/.git/refs/remotes/github/${branch}`)
  ) {
    await exec(`cd ${settings['path.dist']} && git checkout ${branch}`)
    completedAction(
      `Successfully checked out existing ${branch} in dist directory`
    )
    return true
  } else {
    await exec(`cd ${settings['path.dist']} && git checkout -b ${branch}`)
    completedAction(`Successfully checked out new ${branch} in dist directory`)
    return false
  }
}

module.exports.commitAndPush = async (settings, remoteBranchExists) => {
  const branch = await settings['git.getBranch'](settings, getBranch)
  ;({ stdout, stderr } = await exec(
    `cd ${settings['path.dist']} && git status`
  ))
  if (!~stdout.indexOf('Changes not staged for commit') && remoteBranchExists) {
    completedAction('There are no new changes to push to Github')
    return
  }
  ;({ stdout, stderr } = await exec(
    `cd ${settings['path.dist']} &&  git add . && git commit -am "${settings[
      'git.builtThemeCommitMessage'
    ](settings)}"`
  )),
    !stderr
      ? completedAction('Committing new updates to dist repo')
      : error(stderr)
  await exec(
    `cd ${settings['path.dist']} && git push github --set-upstream ${branch}`
  )
  completedAction('Updates pushed to Github')
}
