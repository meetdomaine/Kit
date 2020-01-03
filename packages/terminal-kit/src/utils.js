function log (string) {
  if (console.penetrate && console._interceptingStdout) {
    // Console.log adds a new line character to each write
    // https://github.com/nodejs/node/blob/master/lib/internal/console/constructor.js#L237
    console.penetrate(string + '\n')
  } else {
    console.log(string)
  }
}

module.exports = {
  log
}