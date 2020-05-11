#! /usr/bin/env node
'use strict'

const program = require('commander')
const pkg = require('./package.json')
const configure = require('@halfhelix/configure')
const { protect, splash, epilogue } = require('@halfhelix/terminal-kit')
const processRunner = require('./src/runner')

let command = false

program
  .version(pkg.version)
  .arguments('<cmd>')
  .usage('[run]')
  .option('-e --env [env]', 'specify an environment')
  .action((cmd) => {
    command = cmd
  })
  .parse(process.argv)

Promise.resolve(
  splash({
    title: 'Half Helix Kit',
    subtitle: 'The Cypress toolbelt'
  })
).then(
  protect(() => {
    const settings = configure({
      env: program.env || 'development',
      task: command
    })

    if (~['run'].indexOf(command)) {
      processRunner(settings)
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
