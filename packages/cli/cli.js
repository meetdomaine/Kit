#! /usr/bin/env node
'use strict'

const program = require('commander')
const pkg = require('./package.json')
const webpacker = require('@halfhelix/webpacker')
const configure = require('@halfhelix/configure')
const gitlab = require('@halfhelix/gitlab-kit')
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

program
  .version(pkg.version)
  .arguments('<cmd>')
  .usage('[watch|build|deploy|lint|gitlab|critical]')
  .option('-e --env [env]', 'specify an environment')
  .option('-u --upload [upload]', 'upload specific file in critical command')
  .option('-q --quick', 'hide the loading screen and any synthetic pauses')
  .option('--debug', 'turn the debug flag on')
  .option('--close', 'close critical command after processing once')
  .option('--no-open', 'do not open the default browser')
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
  .action((cmd) => {
    command = cmd
  })
  .parse(process.argv)

new Promise(async (resolve) => {
  try {
    const details = await getPackageInformation('@halfhelix/kit')
    program.quick
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
      simple: program['quick'],
      close: program.close,
      quick: program.quick,
      upload: program.upload,
      env: program.env || 'development',
      task: command
    }

    if (program.debug) {
      commandLineOptions['debug'] = true
    }

    if (program.open === false) {
      commandLineOptions['bs.open'] = false
    }

    const settings = configure(commandLineOptions)

    if (~['deploy', 'watch', 'critical'].indexOf(command)) {
      await getThemeInformation(settings)
      await prepareForDeployment(settings)
    }

    if (~['build', 'deploy'].indexOf(command)) {
      webpacker(settings)
        .then((files) => {
          return settings['css.chunk']
            ? chunkStylesheets(files, settings)
            : Promise.resolve(files)
        })
        .then((files) => {
          if (!files || !files.length) {
            return Promise.resolve(false)
          }

          if (settings.task === 'build') {
            return buildTheme(settings)
          }
          if (settings.task === 'deploy') {
            return deployFiles(files, settings)
          }
        })
        .then((result) => {
          epilogue({ error: !result })
        })
      return
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
      gitlab(program.routine, settings).then(() => {
        epilogue()
      })
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
