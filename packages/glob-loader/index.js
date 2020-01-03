const styleLoader = require('./style-loader')
const jsLoader = require('./javascript-loader')

module.exports = function(source) {
  this.cacheable && this.cacheable()

  if (/.js$/.test(this.resource)) {
    jsLoader.call(this, source)
  }
  if (/.s?css$/.test(this.resource)) {
    styleLoader.call(this, source)
  }
  return source
}
