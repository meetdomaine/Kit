const webpack = require('webpack')
const path = require('path')
const fs = require('fs-extra')
const wait = require('w2t')
const settings = require('@halfhelix/configure').settings
const {
  log,
  action,
  error,
  webpackResponse,
  browserSyncNotice
} = require('@halfhelix/terminal-kit')
const config = require('./src/webpack.config')
const setUpProxy = require('./src/setUpProxy')
const lint = require('./src/lint')
const { interceptConsole, resetConsole, getLogs } = require('./src/console')

function cleanseCompiledFileName(filePath) {
  return path.normalize(filePath.split('?').shift())
}

function getCompiledFilePaths(stats) {
  const json = stats.toJson()
  return Object.keys(json.assetsByChunkName).reduce((array, key) => {
    if (typeof json.assetsByChunkName[key] !== 'string') {
      array = array.concat(
        json.assetsByChunkName[key].map((name) =>
          cleanseCompiledFileName(`${json.outputPath}/${name}`)
        )
      )
    } else {
      array.push(
        cleanseCompiledFileName(
          `${json.outputPath}/${json.assetsByChunkName[key]}`
        )
      )
    }
    return array
  }, [])
}

function writeToLogFile(stats) {
  fs.outputJsonSync(`${settings['path.cwd']}/webpack.kit.log`, stats.toJson(), {
    spaces: 2
  })
}

function webpackHasErrors(webpackError, webpackStats) {
  return (
    webpackError ||
    (webpackStats.toJson().errors.length ? webpackStats.toJson().errors : false)
  )
}

async function compileWithWebpack() {
  if (settings['debug.cssSplitting']) {
    return Promise.resolve([
      `${settings['path.dist']}/assets/${settings['css.mainFileName'].replace(
        '[name]',
        'main'
      )}`
    ])
  }
  if (settings['debug.bypassWebpack']) {
    return Promise.resolve([])
  }
  const spinner = action('Compiling assets with Webpack')
  await wait(1000)

  return new Promise((resolve, reject) => {
    interceptConsole()
    webpack(config(settings)).run(async (error, stats) => {
      if (settings['debug.writeWebpackOutputToFile']) {
        writeToLogFile(stats)
      }

      resetConsole(false)
      spinner.succeed()

      const hasErrors = webpackHasErrors(error, stats)
      if (hasErrors) {
        return reject(hasErrors)
      }

      webpackResponse(stats, settings)
      await wait(1000)

      const files = getCompiledFilePaths(stats)
      resolve(files, settings)
    })
  }).catch((e) => {
    error(e, false)
    return Promise.resolve(false)
  })
}

module.exports = (options) => {
  return compileWithWebpack()
}

module.exports.watch = async (watchCallback) => {
  let spinner = action('Starting up BrowserSync proxy server')

  await wait(1000)
  spinner.succeed()

  spinner = action('Compiling with Webpack')

  interceptConsole()

  const { bs } = await setUpProxy(
    webpack(config(settings)),
    settings,
    watchCallback
  )

  resetConsole()
  const { stderr } = await getLogs()

  spinner.succeed()
  browserSyncNotice({
    target: settings['bs.target'](settings),
    proxy: bs.options.getIn(['urls', 'local'])
  })

  // Print any errors that come up during compilation
  log(stderr)

  return Promise.resolve()
}

module.exports.lint = (options) => {
  return lint(options, settings)
}
