const boxen = require('boxen')
const chalk = require('chalk')
const ora = require('ora')
const termSize = require('term-size')
const { log } = require('./utils')
const { newLines, time } = require('./atoms')

function logo() {
  termSize().columns > 55 && log(require(`${__dirname}/../src/logo`))
}

/**
 * This is the first box style, that does not truncate
 * specific lines that it renders. This is what
 * should be used if the lines are styled with colors etc.
 * so that we maintain style delimiters.
 */
function box() {
  log(newLines())
  const longestString =
    Object.values(arguments).reduce(function (a, b) {
      return (a || '').length > (b || '').length ? a : b
    }) || ''
  const windowIsTooSmall =
    (longestString || '').length > termSize().columns - 10
  const string = Object.keys(arguments)
    .reduce((array, key) => {
      array.push(arguments[key] || '')
      return array
    }, [])
    .filter(Boolean)
    .join(newLines())
  if (windowIsTooSmall) {
    log(string)
  } else {
    log(boxen(string, { padding: 1 }))
  }
  log(newLines())
}

/**
 * This is the second box style, that truncates
 * large lines that are deemed too big for the
 * viewport. This should only be used for lines that
 * are un-styled.
 */
function truncatingBox() {
  log(newLines())
  const string = Object.keys(arguments)
    .reduce((array, key) => {
      if ((arguments[key] || '').length > termSize().columns - 10) {
        array.push(`${arguments[key].slice(0, termSize().columns - 10)}..`)
      } else {
        array.push(arguments[key])
      }
      return array
    }, [])
    .filter(Boolean)
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
  truncatingBox,
  title,
  subtitle,
  prefix,
  spinner,
  color
}
