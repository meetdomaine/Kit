
const webpack = require('webpack')
const protect = require('@halfhelix/terminal-kit/protect')
const settings = require('@halfhelix/configure').settings
const mockServer = require('@halfhelix/shopify-mockery')
const {
  interceptConsole,
  resetConsole,
  getLogs
} = require('./src/console')
const wait = require('w2t')
const {
  log,
  action,
  completedAction,
  webpackResponse,
  browserSyncNotice,
} = require('@halfhelix/terminal-kit')
const config = require('./src/webpack.config')
const setUpProxy = require('./src/setUpProxy')

function cleanseCompiledFileName (path) {
  return path.split('?').shift()
}

function getCompiledFilePaths (stats) {
  const json = stats.toJson()
  return Object.keys(json.assetsByChunkName).reduce((array, key) => {
    if (typeof json.assetsByChunkName[key] !== 'string') {
      array = array.concat(json.assetsByChunkName[key].map(name => (
        cleanseCompiledFileName(`${json.outputPath}/${name}`)
      )))
    } else {
      array.push(
        cleanseCompiledFileName(`${json.outputPath}/${json.assetsByChunkName[key]}`)
      )
    }
    return array
  }, [])
}

async function compileWithWebpack () {
  if (settings.bypassWebpack) {
    return Promise.resolve(settings)
  }

  const spinner = action('Compiling assets with Webpack')

  await wait(1000)

  return new Promise(resolve => {
    interceptConsole()
    webpack(config(settings)).run(async (error, stats) => {
      resetConsole(false)
      const files = getCompiledFilePaths(stats)
      spinner.succeed()
      webpackResponse(stats, settings)
      await wait(1000)
      resolve(files, settings)
    })
  })
}

module.exports = options => {
  return compileWithWebpack()
}

module.exports.watch = async (watchCallback) => {
  let spinner = action('Starting up BrowserSync proxy server')
  await wait(1000)
  spinner.succeed()
  spinner = action('Compiling with Webpack')

  interceptConsole()

  // settings.mock && mockServer(settings)

  const {bs} = await setUpProxy(
    webpack(config(settings)),
    settings,
    watchCallback
  )

  resetConsole()
  const {stderr} = await getLogs()

  spinner.succeed()
  browserSyncNotice({
    target: settings.target(settings),
    proxy: bs.options.getIn(["urls", "local"])
  })

  // Print any errors that come up during compilation
  log(stderr)

  return Promise.resolve()
}