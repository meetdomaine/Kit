/**
 * This file is a patch for core BrowserSync code that we've had to
 * rewrite to resolve issues with secure cookies. This code is
 * resolves the immediate issue until a fix is merged into BrowserSync.
 * @see: https://github.com/BrowserSync/browser-sync/pull/1964
 * @see: https://github.com/BrowserSync/browser-sync/blob/master/packages/browser-sync/lib/server/proxy-utils.js#L122
 */

/**
 * Remove 'domain' from any cookies
 * @param {Object} res
 */
function checkCookies(res) {
  if (typeof res.headers['set-cookie'] !== 'undefined') {
    res.headers['set-cookie'] = res.headers['set-cookie'].map(function (item) {
      return rewriteCookies(item)
    })
  }
}

/**
 * Remove the domain from any cookies.
 * @param rawCookie
 * @returns {string}
 */
function rewriteCookies(rawCookie) {
  var objCookie = (function () {
    // simple parse function (does not remove quotes)
    var obj = {}
    var pairs = rawCookie.split(/; */)
    pairs.forEach(function (pair) {
      var eqIndex = pair.indexOf('=')
      // skip things that don't look like key=value
      if (eqIndex < 0) {
        return
      }
      var key = pair.substr(0, eqIndex).trim()
      obj[key] = pair.substr(eqIndex + 1, pair.length).trim()
    })
    return obj
  })()
  var pairs = Object.keys(objCookie)
    .filter(function (item) {
      return item.toLowerCase() !== 'domain'
    })
    .map(function (key) {
      return key + '=' + objCookie[key]
    })
  if (rawCookie.match(/httponly/i)) {
    pairs.push('HttpOnly')
  }
  if (rawCookie.match(/secure/i)) {
    pairs.push('secure')
  }
  return pairs.join('; ')
}

module.exports = {
  checkCookies
}
