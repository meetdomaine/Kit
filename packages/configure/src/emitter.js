const utils = require('./utils')

module.exports = {
  $emit(event, payload) {
    if (this.$listeners[event]) {
      this.$listeners[event](payload, utils, this)
    }
  }
}
