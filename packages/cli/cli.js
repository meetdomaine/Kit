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

let command = {}

program
  .version(pkg.version)
  .usage('[watch|build|deploy|lint|gitlab|critical]')
  .option('-e --env [env]', 'specify an environment', 'development')
  .option('--debug', 'turn the debug flag on', false)
  .option(
    '--open',
    'open the default browser automatically (applies to "watch")'
  )
  .option(
    '--no-open',
    'do not open the default browser automatically (applies to "watch")'
  )
  .option(
    '-f --fix',
    'attempts to fix linting issues (applies to "lint")',
    false
  )

program.addOption(new program.Option('-q --quick').hideHelp())
program.addOption(new program.Option('-u --upload [upload]').hideHelp())
program.addOption(new program.Option('--close').hideHelp())
program.addOption(new program.Option('-i --include [include]').hideHelp())
program.addOption(new program.Option('-r --routine [routine]').hideHelp())

program
  .command('watch')
  .description('spin up a development experience')
  .action(() => {
    command.type = 'watch'
  })
program
  .command('build')
  .description('build the theme locally')
  .action(() => {
    command.type = 'build'
  })
program
  .command('deploy')
  .description('deploy the theme to Shopify')
  .action(() => {
    command.type = 'deploy'
  })
program
  .command('lint [types...]')
  .description('lint different file types (e.g. "lint css js")')
  .action((types) => {
    command = {
      type: 'lint',
      include: types.length ? types : ['css', 'js']
    }
  })

program
  .command('gitlab [routine]')
  .description('run a Gitlab specific routine (e.g. create an MR via CI)')
  .action((routine) => {
    command = {
      routine,
      type: 'gitlab'
    }
  })

program
  .command('critical')
  .description('a helper command for generating a critical CSS bundle')
  .action(() => {
    command = {
      type: 'critical'
    }
  })

program.addHelpCommand(
  'help [command]',
  'list out available commands and options'
)

program.parse(process.argv)

const programOptions = program.opts()

new Promise(async (resolve) => {
  try {
    const details = await getPackageInformation('@halfhelix/kit')
    programOptions.quick
      ? true
      : splash({
          title: 'Half Helix Kit',
          subtitle: 'The developer toolbelt',
          version: getVersionDetails(details, `${pkg.version}`)
        })
    resolve()
  } catch (e) {
    programOptions.quick
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
      simple: programOptions.quick,
      close: programOptions.close,
      quick: programOptions.quick,
      upload: programOptions.upload,
      env: programOptions.env,
      task: command.type
    }

    if (programOptions.debug) {
      commandLineOptions['debug'] = true
    }

    if (typeof programOptions.open !== 'undefined') {
      commandLineOptions['bs.open'] = programOptions.open
    }

    const settings = configure(commandLineOptions)

    if (~['deploy', 'watch', 'critical'].indexOf(settings.task)) {
      await getThemeInformation(settings)
      await prepareForDeployment(settings)
    }

    if (~['build', 'deploy'].indexOf(settings.task)) {
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

    if (~['critical'].indexOf(settings.task)) {
      webpacker.critical(settings, (files) => {
        chunkStylesheets(files, settings).then((files) => {
          deployFiles(files, settings)
        })
      })
      return
    }

    if (~['watch'].indexOf(settings.task)) {
      webpacker.watch(settings, (event, file, settings) =>
        deployFile(event, file, settings)
      )
      return
    }

    if (~['lint'].indexOf(settings.task)) {
      webpacker
        .lint(
          {
            include: programOptions.include
              ? programOptions.include.split(',') // legacy support
              : command.include,
            fix: programOptions.fix
          },
          settings
        )
        .then(() => {
          epilogue()
        })
      return
    }

    if (~['gitlab'].indexOf(settings.task)) {
      gitlab(programOptions.routine || command.routine, settings).then(() => {
        epilogue()
      })
      return
    }
  })
)
