#! /usr/bin/env node
'use strict'

const program = require('commander')
const pkg = require('./package.json')
const webpacker = require('@halfhelix/webpacker')
const configure = require('@halfhelix/configure')
const { developerThemeService } = require('@halfhelix/shopify-kit')
const { gitlab, github } = require('@halfhelix/gitlab-kit')
const { protect, splash, epilogue } = require('@halfhelix/terminal-kit')
const {
  getPackageInformation,
  getVersionDetails
} = require('./lib/getPackageInformation')

const {
  prepareForDeployment,
  deployFiles,
  buildTheme,
  deployFile,
  chunkStylesheets,
  getThemeInformation
} = require('@halfhelix/shopify-kit')

let command = false
let subCommand = false

program
  .version(pkg.version)
  .arguments('<cmd>')
  .usage('[watch|build|deploy|lint|gitlab|critical|theme <command>]')
  .option('-e --env [env]', 'specify an environment')
  .option('-u --upload [upload]', 'upload specific file in critical command')
  .option('-q --quick', 'hide the loading screen and any synthetic pauses')
  .option('--debug', 'turn the debug flag on')
  .option('--close', 'close critical command after processing once')
  .option('--sync-with-github', 'sync built theme to github')
  .option('--no-open', 'do not open the default browser')
  .option('--developer', 'use developer theme in watch and deploy commands')
  .option(
    '-i --include [include]',
    'specify the type of files to include',
    'js,css'
  )
  .option('-f --fix', 'Fix formatting issues', false)
  .option(
    '-r --routine [routine]',
    'Specify the routine to run (for supporting commands)',
    ''
  )
  .action((cmd, program) => {
    command = cmd
    if ((program.args || []).length > 1) {
      subCommand = program.args[1]
    }

    // Adds in for kit deploy --developer
    if (command === 'theme' && subCommand === 'deploy') {
      command = 'deploy'
      program.developer = true
    }
  })
  .parse(process.argv)

const options = program.opts()

new Promise(async (resolve) => {
  try {
    const details = await getPackageInformation('@halfhelix/kit')
    options.quick
      ? true
      : splash({
          title: 'Half Helix Kit',
          subtitle: 'The developer toolbelt',
          version: getVersionDetails(details, `${pkg.version}`)
        })
    resolve()
  } catch (e) {
    program.quick
      ? true
      : splash({
          title: 'Half Helix Kit',
          subtitle: 'The developer toolbelt'
        })
    resolve()
  }
}).then(
  protect(async () => {
    const commandLineOptions = {
      simple: options['quick'],
      close: options.close,
      quick: options.quick,
      upload: options.upload,
      env: options.env || 'development',
      isDeveloper: options.developer,
      task: command
    }

    if (program.debug) {
      commandLineOptions['debug'] = true
    }

    if (program.open === false) {
      commandLineOptions['bs.open'] = false
    }

    const settings = await configure(commandLineOptions)

    if (~['deploy', 'watch', 'critical'].indexOf(command)) {
      await getThemeInformation(settings)
      await prepareForDeployment(settings)
    }

    if (~['build', 'deploy'].indexOf(command)) {
      let files = await webpacker(settings)
      files = settings['css.chunk']
        ? await chunkStylesheets(files, settings)
        : files

      if (!files || !files.length) {
        epilogue({ error: true })
      }

      if (settings.task === 'deploy') {
        await deployFiles(files || [], settings)
        return epilogue({ error: false })
      }

      if (options.syncWithGithub) {
        const remoteBranchExists = await github.prepareDistRepo(settings)
        await buildTheme(files || [], settings)
        await github.commitAndPush(settings, remoteBranchExists)
      } else {
        await buildTheme(settings)
      }

      return epilogue({ error: false })
    }

    if (~['critical'].indexOf(command)) {
      webpacker.critical(settings, (files) => {
        chunkStylesheets(files, settings).then((files) => {
          deployFiles(files, settings)
        })
      })
      return
    }

    if (~['watch'].indexOf(command)) {
      webpacker.watch(settings, (event, file, settings) =>
        deployFile(event, file, settings)
      )
      return
    }

    if (~['lint'].indexOf(command)) {
      webpacker
        .lint(
          {
            include: program.include.split(','),
            fix: program.fix
          },
          settings
        )
        .then(() => {
          epilogue()
        })
      return
    }

    if (~['gitlab'].indexOf(command)) {
      await gitlab(options.routine, settings)
      epilogue()
      return
    }

    if (~['theme'].indexOf(command)) {
      await developerThemeService(subCommand, options, settings)
      epilogue()
      return
    }

    // Add more commands here..!

    program.outputHelp()
    epilogue({
      error: true,
      title: `Command "${command}" not supported`,
      subtitle: 'See usage information above'
    })
  })
)
