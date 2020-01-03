
const constants = require('./src/constants')

module.exports = (callback, {
  exit = true,
  scope = '',
  settings = {}
} = {}) => {
  async function protect (options) {
    try {
      return callback(options)
    } catch (e) {
      // writeError(e)

      if (
        constants.messages[scope] &&
        constants.messages[scope].instruction
      ) {
        // writeInstruction(constants.messages[scope].instruction, settings)
      }

      exit && process.exit()
    } finally {
      // exit && process.exit()
    }
  }

  return protect
}