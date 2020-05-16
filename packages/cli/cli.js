#! /usr/bin/env node
'use strict'

const program = require('commander')
const pkg = require('./package.json')
const webpacker = require('@halfhelix/webpacker')
const configure = require('@halfhelix/configure')
const gitlab = require('@halfhelix/gitlab-kit')
const { protect, splash, epilogue } = require('@halfhelix/terminal-kit')

const {
  cleanseFiles,
  deployFiles,
  buildTheme,
  deployFile,
  chunkCSS
} = require('@halfhelix/shopify-kit')

let command = false

program
  .version(pkg.version)
  .version('0.1.0')
  .arguments('<cmd>')
  .usage('[watch|build|deploy|lint|gitlab]')
  .option('-e --env [env]', 'specify an environment')
  .option('-q --quick', 'hide the loading screen')
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

Promise.resolve(
  splash({
    title: 'Half Helix Kit',
    subtitle: 'The developer toolbelt'
  })
).then(
  protect(async () => {
    const settings = configure({
      simple: program['quick'],
      env: program.env || 'development',
      task: command
    })

    if (~['deploy', 'watch']) {
      await cleanseFiles(settings)
    }

    if (~['build', 'deploy'].indexOf(command)) {
      webpacker(settings)
        .then((files) => {
          return settings['css.chunk']
            ? chunkCSS(files, settings)
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

    if (~['watch'].indexOf(command)) {
      webpacker.watch((event, file, settings) =>
        deployFile(event, file, settings)
      )
      return
    }

    if (~['lint'].indexOf(command)) {
      webpacker
        .lint({
          include: program.include.split(','),
          fix: program.fix
        })
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
