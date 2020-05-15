const figures = require('figures')
const { format } = require('date-fns')

let _console = {
  error: false
}

function clear() {
  require('clear')()
}

function newLines(amount = 1) {
  return [...Array(amount).keys()].map((v) => '\n').join()
}

// @see https://www.npmjs.com/package/figures
function icon(type) {
  return figures[type]
}

function time() {
  return format(new Date(), 'HH:mm:ss')
}

module.exports = {
  clear,
  newLines,
  icon,
  time
}
