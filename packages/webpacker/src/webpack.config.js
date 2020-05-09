const path = require('path')
const webpack = require('webpack')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const DynamicPublicPathPlugin = require('dynamic-public-path-webpack-plugin')
const autoprefixer = require('autoprefixer')
const fs = require('fs-extra')
const settings = require('@halfhelix/configure').settings

function getThemeNodeModulesDir(suffix = '') {
  return `${settings['path.cwd']}/node_modules${suffix}`
}

function getEnv() {
  return process.env.NODE_ENV === 'development' ? 'development' : 'production'
}

/**
 * First, checks the existence of a child node modules
 * package. Then, for global packages, checks the closets
 * parent node modules directory.
 */
function getNodeModulesDir(suffix = '') {
  const possibleChild = path.resolve(__dirname, `../node_modules${suffix}`)
  if (fs.existsSync(possibleChild)) {
    return possibleChild
  }
  const splitParent = __dirname.split('node_modules')
  splitParent.pop()
  const possibleParent =
    splitParent.join('node_modules') + `node_modules${suffix}`
  if (fs.existsSync(possibleParent)) {
    return possibleParent
  }
  return ''
}

function resolveNodeModule(suffix = '') {
  const localDir = getNodeModulesDir(suffix)
  return fs.existsSync(localDir) ? localDir : getThemeNodeModulesDir(suffix)
}

const matchLoader = (name) => (loaderRule) => {
  if (typeof loaderRule === 'string') {
    return ~loaderRule.indexOf(name)
  }

  return ~loaderRule.loader.indexOf(name)
}

function findAndCleanseLoader(rule, name, cleanse = true) {
  if (rule.loader === name) {
    cleanse && delete rule.loader
    return true
  }

  const isInUse = (rule.use || []).findIndex(matchLoader(name))

  if (~isInUse) {
    cleanse && rule.splice(isInUse, 1)
    return true
  }

  return false
}

function prepareDevtool() {
  if (settings.task !== 'watch') {
    return ''
  } else {
    return settings.webpack.devtool
  }
}

function prepareEntry() {
  const { entry } = settings.webpack

  if (settings.task !== 'watch' || !settings.hmr) {
    return entry
  }

  if (typeof entry === 'string') {
    return [entry].push(settings['path.hmr'])
  }

  return Object.keys(entry).reduce((obj, key) => {
    if (typeof entry[key] === 'string') {
      obj[key] = [entry[k]]
    } else {
      obj[key] = entry[key]
    }
    obj[key].push(settings['path.hmr'])
    return obj
  }, {})
}

function prepareOutput() {
  return Object.assign({}, settings.webpack.output, {
    publicPath: settings['path.public']
  })
}

function prepareResolve() {
  return Object.assign(
    {
      modules: [getNodeModulesDir(), 'node_modules']
    },
    settings.webpack.resolve || {}
  )
}

function prepareResolveLoader() {
  return {
    modules: [getNodeModulesDir(), 'node_modules']
  }
}

function prepareModule() {
  const webpackModules = Object.assign({}, settings.webpack.module)

  if (!webpackModules.rules) {
    throw new Error('webpack.module must have "rules" property')
  }

  webpackModules.rules.map((rule) => {
    _addCSSExtractPlugin(rule)
    _addEslintConfig(rule)
    _addCustomJsLoaders(rule)
    _addCustomStyleLoaders(rule)
  })

  return webpackModules
}

function _addCSSExtractPlugin(rule) {
  let { extract, use } = rule

  if (!extract) return
  delete rule.extract

  if (settings.task === 'watch') {
    return
  }

  if (!Array.isArray(use)) {
    throw new Error('webpack.module.rules.use must be array')
  }
  if (use.length < 2) {
    throw new Error('webpack.module.rules.use must have a min length of 2')
  }

  rule.use = ExtractTextPlugin.extract({
    fallback: use[0],
    use: use.splice(1)
  })
}

function _addEslintConfig(rule) {
  if (!findAndCleanseLoader(rule, 'eslint-loader')) {
    return
  }
  rule.loader = resolveNodeModule('/eslint-loader')
  rule.options = {
    eslintPath: resolveNodeModule('/eslint'),
    ...(rule.options || {})
  }
}

function _addCustomJsLoaders(rule) {
  if (!findAndCleanseLoader(rule, 'babel-loader')) {
    return
  }
  rule.use = [
    {
      loader: resolveNodeModule('/babel-loader'),
      options: {
        ...settings.babel,
        ...(rule.options || {})
      }
    },
    {
      loader: resolveNodeModule('/@halfhelix/glob-loader'),
      options: {
        'path.src': settings['path.src'],
        autoChunk: settings['autoChunk'],
        sortFunction: settings['globSortFunction']
      }
    }
  ]
}

function _addCustomStyleLoaders(rule) {
  if (!findAndCleanseLoader(rule, 'style-loader', false)) {
    return
  }

  rule.use.push({
    loader: resolveNodeModule('/@halfhelix/glob-loader'),
    options: {
      'path.src': settings['path.src'],
      sortFunction: settings['globSortFunction']
    }
  })

  function sassIndex() {
    return rule.use.findIndex(matchLoader('sass-loader'))
  }

  if (~sassIndex()) {
    if (settings.addShopifyLoader && settings.task === 'watch') {
      rule.use.splice(sassIndex(), 0, {
        loader: resolveNodeModule('/@halfhelix/shopify-loader'),
        options: {
          'path.cdn': settings['path.cdn']
        }
      })
    }
    if (settings.autoprefixInDev || settings.task !== 'watch') {
      rule.use.splice(sassIndex(), 0, {
        loader: resolveNodeModule('/postcss-loader'),
        options: {
          ident: 'postcss',
          plugins: [autoprefixer]
        }
      })
    }
  }

  rule.use.map((set) => {
    if (
      !/^\\/.test(set.loader) &&
      ~['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'].indexOf(
        set.loader
      )
    ) {
      set.loader = resolveNodeModule(`/${set.loader}`)
    }
  })
}

function preparePlugins() {
  return [
    ...(settings.webpack.plugins || []),
    ...(settings.lintStyles
      ? [
          new StyleLintPlugin({
            stylelintPath: resolveNodeModule('/stylelint'),
            files: settings.stylelintPaths(settings)
          })
        ]
      : []),
    ...(settings.task === 'watch'
      ? [new webpack.SourceMapDevToolPlugin()]
      : [new ExtractTextPlugin(settings.cssName), new MinifyPlugin()]),
    ...(settings.task === 'watch' && settings.hmr
      ? [new webpack.HotModuleReplacementPlugin()]
      : []),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(getEnv()),
      DEBUG: getEnv() === 'development',
      KIT_VERSION: JSON.stringify(settings.package.version)
    }),
    ...(settings.task !== 'watch'
      ? [
          ...Object.keys(settings.webpack.entry).map((name) => {
            return new DynamicPublicPathPlugin({
              externalGlobal: settings.cdnPathVar,
              chunkName: name
            })
          })
        ]
      : [])
  ]
}

function prepareExternals() {
  return Object.assign({}, settings.webpack.externals)
}

module.exports = () => {
  const {
    devtool,
    entry,
    output,
    resolve,
    resolveLoader,
    plugins,
    externals,
    module,
    ...remaining
  } = settings.webpack

  const webpackConfig = {
    mode: getEnv(),
    devtool: prepareDevtool(),
    entry: prepareEntry(),
    output: prepareOutput(),
    resolve: prepareResolve(),
    resolveLoader: prepareResolveLoader(),
    plugins: preparePlugins(),
    externals: prepareExternals(),
    module: prepareModule(),
    stats: 'none',
    performance: {
      hints: false
    },
    ...remaining
  }

  return webpackConfig
}
