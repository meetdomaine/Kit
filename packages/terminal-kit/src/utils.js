const logger = {
  testing: {
    isActive: false,
    logs: []
  },
  log(string) {
    if (this.testing.isActive) {
      this.testing.logs.push(string)
      return
    }
    if (console.penetrate && console._interceptingStdout) {
      // Console.log adds a new line character to each write
      // https://github.com/nodejs/node/blob/master/lib/internal/console/constructor.js#L237
      console.penetrate(string + '\n')
    } else {
      console.log(string)
    }
  }
}

logger.log = logger.log.bind(logger)

module.exports = logger
