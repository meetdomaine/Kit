const utils = require('loader-utils')
const {
  getMatches,
  replaceRootDirectory,
  injectJavascriptDependencies
} = require('./src/util')
const {
  javascript
} = require('./src/regex')

module.exports = function(source) {
  const callback = this.async()
  const options = {
    ...utils.getOptions(this),
    source
  }
  const matches = replaceRootDirectory(
    getMatches(source, javascript),
    options
  )
  if (!matches.length) {
    return callback(null, options.source)
  }
  Promise.all(matches.map(match => {
    return injectJavascriptDependencies.call(this, match, options)
  })).then(() => {
    callback(null, options.source)
  })
}
