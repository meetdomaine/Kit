#! /usr/bin/env node
'use strict'

const program = require('commander')
const pkg = require('./package.json')
const webpacker = require('@halfhelix/webpacker')
const configure = require('@halfhelix/configure')
const {
  protect,
  splash,
  epilogue
} = require('@halfhelix/terminal-kit')

const {
  deployFiles,
  buildTheme,
  deployFile
} = require('@halfhelix/shopify-kit')

let command = false

program
  .version(pkg.version)
  .version('0.1.0')
  .arguments('<cmd>')
  .usage('[watch|build|deploy]')
  .option('-e --env [env]', 'specify an environment')
  .option('-q --quick', 'hide the loading screen')
  .action(cmd => {
    command = cmd
  })
  .parse(process.argv)

;(
  Promise.resolve(
    splash({
      title: 'Half Helix Kit',
      subtitle: 'The developer toolbelt'
    })
  )
).then(protect(() => {
  const settings = configure({
    simple: program['quick'],
    env: program.env || 'development',
    task: command
  })

  if (
    ~['build', 'deploy'].indexOf(command)
  ) {
    webpacker(settings).then(files => {
      if (!files || files.length) {
        return Promise.resolve(false)
      }

      if (settings.task === 'build') {
        return buildTheme(settings)
      }
      if (settings.task === 'deploy') {
        return deployFiles(files, settings)
      }
    }).then(result => {
      epilogue({error: !result})
    })
    return
  }

  if (
    ~['watch'].indexOf(command)
  ) {
    webpacker.watch((event, file, settings) => {
      return deployFile(event, file, settings)
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
}))