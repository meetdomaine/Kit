const utils = require('loader-utils')
const {
  getMatches,
  replaceRootDirectory,
  injectSassDependencies
} = require('./src/util')
const {
  sass
} = require('./src/regex')

module.exports = function(source) {
  const callback = this.async()
  const options = {
    ...utils.getOptions(this),
    source
  }
  const matches = replaceRootDirectory(
    getMatches(source, sass),
    options
  )
  if (!matches.length) {
    return callback(null, options.source)
  }

  Promise.all(matches.map(match => {
    return injectSassDependencies.call(this, match, options)
  })).then(() => {
    callback(null, options.source)
  })
}