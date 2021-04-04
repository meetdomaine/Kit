const output = require('./src/organisms')

module.exports = (callback, { exit = true, exitCode = 1 } = {}) => {
  async function protect(options) {
    try {
      return callback(options)
    } catch (e) {
      output.error(e)
      output.epilogue()
      exit && process.exit(exitCode)
    }
  }

  return protect
}
