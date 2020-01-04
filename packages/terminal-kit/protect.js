
const output = require('./src/organisms')

module.exports = (callback, {
  exit = true
} = {}) => {
  async function protect (options) {
    try {
      return callback(options)
    } catch (e) {
      output.error(e)
      output.epilogue()
      exit && process.exit()
    }
  }

  return protect
}