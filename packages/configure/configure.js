const yaml = require('js-yaml')
const fs = require('fs-extra')

require('dotenv').config()

const defaults = require('./src/defaults')
const utils = require('./src/utils')

function readConfigFiles () {
  const config = defaults['path.config'].reduce((obj, path) => {
    if (!fs.existsSync(path)) {
      return obj
    }

    if (~path.indexOf('yml')) {
      return yaml.safeLoad(
        fs.readFileSync(path)
      )
    } else {
      return require(path)
    }
  }, {})

  if (fs.existsSync(defaults['path.webpack'])) {
    config.webpack = require(defaults['path.webpack'])
  }

  return config
}

function validateConfig (config, env) {
  if (!config.themes || !config.themes[env]) {
    throw new Error(`No settings for current env: ${env}`)
  }
}

module.exports = options => {
  Object.assign(defaults, options)

  options.debug && (process.env.DEBUG = '*')
  process.env.NODE_ENV = options.env

  const config = readConfigFiles()
  validateConfig(config, options.env)

  Object.assign(defaults, config, config.themes[options.env], options)
  return defaults
}

module.exports.settings = defaults
module.exports.utils = utils