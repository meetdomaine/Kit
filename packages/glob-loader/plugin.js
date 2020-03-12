const fs = require('../webpacker/node_modules/fs-extra')
const path = require('path')
const util = require('util')

function writeToLogFile (json) {
  fs.outputFileSync(`${__dirname}/critical.kit.log`, util.inspect(json, true, 10))
}

const {
  getMatches,
  getChunkName,
  getFilesViaGlob,
  replaceRootDirectory
} = require('./src/util')
const {
  sass
} = require('./src/regex')

function getModuleScssFiles (entry, options) {
  const source = Object.values(entry).reduce((flat, element) => {
    if (typeof element === 'object') {
      flat = flat.concat(element)
    } else {
      flat.push(element)
    }
    return flat
  }, [])
    .filter(file => /\.s?css/.test(file))
    .map(file => {
      return path.resolve(options['path.src'], '../', file)
    }).reduce((source, file) => {
      if (fs.pathExistsSync(file)) {
        source += fs.readFileSync(file)
      }
      return source
    }, '')

  return replaceRootDirectory(
    getMatches(source, sass),
    options
  )
}

async function processMatchedFiles (files, options) {
  const grouped = files.reduce((obj, filePath) => {
    const groupName = getChunkName(filePath, options)
    if (typeof obj[groupName] === 'undefined') {
      obj[groupName] = []
    }
    obj[groupName].push(filePath)
    return obj
  }, {})

  return Object.keys(grouped).reduce((obj, key) => {
    if (grouped[key].length > 1) {
      obj[key] = grouped[key]
    }
    return obj
  }, {})
}

module.exports = function (entry, options) {
  const matches = getModuleScssFiles(entry, options)
  if (!matches.length) {
    return callback(null)
  }

  return Promise.all(matches.map(match => {
    return getFilesViaGlob(match)
  })).then(files => {
    return processMatchedFiles(files.flat(), options)
  })
}