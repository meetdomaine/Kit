const boxen = require('boxen')
const chalk = require('chalk')
const ora = require('ora')

const { log } = require('./utils')
const { newLines, time } = require('./atoms')
function logo() {
  log(require(`${__dirname}/../src/logo`))
}

function box() {
  log(newLines())
  const string = Object.keys(arguments)
    .reduce((array, key) => {
      array.push(arguments[key])
      return array
    }, [])
    .join(newLines())
  log(boxen(string, { padding: 1 }))
  log(newLines())
}

function title(string) {
  return chalk.bold(string)
}

function subtitle(string) {
  return string
}

function spinner(string) {
  return ora({
    text: string,
    spinner: 'circleHalves',
    color: 'blue'
  }).start()
}

function prefix() {
  return `${time()} / `
}

function color(color, string) {
  return chalk[color](string)
}

module.exports = {
  logo,
  box,
  title,
  subtitle,
  prefix,
  spinner,
  color
}
