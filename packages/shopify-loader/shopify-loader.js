const utils = require('loader-utils')

const regex = /\{\{ ?['"](.[^'" ]*)['"] ?\| ?asset_url ?\}\}/gm

function getMatches (source, regex) {
  let matches = []
  let currentMatch = []
  while ((currentMatch = regex.exec(source)) !== null) {
    matches.push(currentMatch)
  }
  return (
    matches.length
    ? matches.map(match => ({
      full: match[0],
      match: match[1]
    }))
    : matches
  )
}

module.exports = function(source, map) {
  const options = utils.getOptions(this)
  const matches = getMatches(source, regex)
  matches.forEach(match => {
    source = source.replace(match.full, `${options['path.cdn']}${match.match}`)
    return true
  })

  this.callback(null, source, map)
}
