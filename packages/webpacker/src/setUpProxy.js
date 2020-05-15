const WDM = require('webpack-dev-middleware')
const WHM = require('webpack-hot-middleware')
const browserSync = require('browser-sync').create()
const wait = require('w2t')
const { action } = require('@halfhelix/terminal-kit')

function isLocalhost(string) {
  return /localhost/.test(string)
}

let WDMisReady = false

function makeConfig(webpack, settings, watchCallback) {
  const wdm = WDM(webpack, {
    publicPath: settings['path.public'],
    noInfo: true,
    stats: 'errors-warnings',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })

  const config = {
    proxy: {
      target: settings.mock
        ? settings.mockTarget(settings)
        : settings.target(settings),
      middleware: [wdm]
    },
    open: settings['open']
      ? isLocalhost(settings['local'])
        ? 'internal'
        : 'external'
      : false,
    host: settings['local'],
    https: true,
    notify: false,
    snippetOptions: {
      rule: settings.browserSyncSnippetPlacement(settings)
    },
    files: [
      {
        match: [settings.watch(settings)],
        fn: (event, file) => {
          // Don't start listening to file changes until Webpack is ready
          if (!WDMisReady) {
            return
          }
          return watchCallback(event, file, settings).then(
            async (shouldReload) => {
              if (!shouldReload) {
                return
              }
              const spinner = action('Reloading your browser')
              await wait(settings.reloadDelay || 1000)
              browserSync.reload()
              await wait(500)
              spinner.succeed()
            }
          )
        }
      }
    ],
    logLevel: 'silent'
  }

  if (settings.replaceAssets) {
    config.rewriteRules = settings.proxyReplacements.map((rule) => {
      return {
        match: rule.regex,
        fn: (req, res, match) => {
          return rule.replacement(settings, req, res, match) || ''
        }
      }
    })
  }

  if (settings.hmr) {
    config.proxy.middleware.push(WHM(webpack))
  }

  return { wdm, config }
}

module.exports = (webpack, settings, watchCallback) => {
  const { wdm, config } = makeConfig(webpack, settings, watchCallback)
  let spinner = false

  wdm.context.compiler.hooks.invalid.tap('kit', () => {
    spinner = action('Rebuilding bundle')
  })
  wdm.context.compiler.hooks.done.tap('kit', () => {
    spinner.succeed()
  })

  return new Promise((resolve, reject) => {
    browserSync.init(config, (error, bs) => {
      wdm.waitUntilValid(() => {
        WDMisReady = true
        resolve({ bs, wdm })
      })
    })
  })
}
