/**
 * This should be a global util function
 * since it has been repeated a number of times.
 * This helps with windows compatibility.
 *
 * @param {String} path
 */
function reverseSlashes(path) {
  return path.replace(/\\/g, '/')
}

/**
 * Use the file path to determine which grouping
 * chunk it should be apart of.
 *
 * @param {String} path
 * @param {Object} settings
 */
function getChunkName(path, settings) {
  const split = path
    .replace(reverseSlashes(settings['path.src']), '')
    .split('/')
    .filter((val) => val)

  return split[1] || 'general'
}

function logTokensWithoutCSS(obj, showOnly) {
  const restricted = Object.keys(obj).reduce((newObj, key) => {
    if (showOnly && !~showOnly.indexOf(key)) {
      return newObj
    }
    newObj[key] = obj[key].map((token) =>
      Object.assign({}, token, {
        cleansed: '',
        original: ''
      })
    )
    return newObj
  }, {})
  console.dir(restricted, { depth: 2 })
}

module.exports = {
  reverseSlashes,
  getChunkName,
  logTokensWithoutCSS
}
