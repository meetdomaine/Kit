const yaml = require('js-yaml')
const fs = require('fs-extra')

require('dotenv').config()

const {
  CWD
} = require('./src/constants')

const defaults = {
  'package': require(`${CWD}/package.json`),
  'path.config': [
    `${CWD}/kit.config.js`,
    `${CWD}/config.yml`
  ],
  'path.cwd': `${CWD}`,
  'path.webpack': `${CWD}/webpack.config.js`,
  'path.dist': `${CWD}/dist`,
  'path.src': `${CWD}/src`,
  'path.public': `/dev/`,
  'path.hmr': 'webpack-hot-middleware/client?reload=true',
  'path.cdn': 'https://cdn.shopify.com/replace-this',
  'path.stdout': `${CWD}/node_modules/.logs/kit-stdout.log`,
  'path.stderr': `${CWD}/node_modules/.logs/kit-stderr.log`,
  'cdnPathVar': '__GLOBAL__.cdn',
  'theme': '',
  'password': '',
  'store': '',
  'target': (settings) => {
    return `https://${(settings.domain || settings.store)}?preview_theme_id=${settings['theme']}`
  },
  'domain': false,
  'local': 'localhost',
  'browserSyncSnippetPlacement' (settings) {
    return {
      match: /<\/body>/i,
      fn: function (snippet, match) {
        return snippet + match;
      }
    }
  },
  'hmr': true,
  'ignore': [
    'config/settings_data.json'
  ],
  'webpack': {},
  'lintStyles': true,
  'stylelintPaths' (settings) {
    return [
      `src/assets/css/*.scss`,
      `src/modules/**/*.scss`,
      `src/sections/**/*.scss`
    ]
  },
  'autoprefixInDev': false,
  'open': false,
  'watch': (settings) => {
    return `${settings['path.src']}/**/*`
  },
  'cssName': '[name].min.css.liquid',
  'bypassWebpack': false,
  'reloadDelay': 700,
  'sortFunction': false,
  'replaceAssets': true,
  'proxyReplacements': [{
    'regex': /<script.*main(?:[.]min)?[.]js.[^>]*><\/script>/ig,
    'replacement' () {}
  },{
    'regex': /<link.*main(?:[.]min)?[.]css.[^>]*>/ig,
    'replacement' (settings) {
      return `<script src="${settings['path.public']}/main.js"></script>`
    }
  }],
  'autoChunk': true,
  'addShopifyLoader': true,
  'mock': false,
  'mockTarget' () {
    return  `http://localhost:8080`
  },
  'debug': false
}

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