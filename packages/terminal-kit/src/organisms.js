const chalk = require('chalk')
const cliProgress = require('cli-progress')

const {
  log
} = require('./utils')
const {
  clear,
  icon
} = require('./atoms')
const {
  logo,
  box,
  title,
  subtitle,
  spinner
} = require('./molecules')

function splash ({title: bar, subtitle: foo}) {
  clear()
  logo()
  box(
    title(`${icon('pointerSmall')} ${bar}`),
    subtitle(`${icon('pointerSmall')} ${foo}`)
  )
}

function action (string) {
  return spinner(string)
}

function completedAction (string) {
  return log(`${chalk.green(icon('tick'))} ${string}`)
}

function webpackResponse (stats, settings) {
  const asJson = stats.toJson()
  const strings = (asJson.assets || []).map(obj => {
    return `${icon('star')} ${obj['name']} [${obj['size'] / 1000} kbs]`
  })
  box(
    title('Assets: '),
    ...strings
  )
  ;(asJson.errors || []).length && (
    log((asJson.errors || []).join('\n') + '\n')
  )
}

function epilogue ({error = false, title: foo = false, subtitle: bar = false} = {}) {
  const text = foo || 'Process completed!'
  box(
    title(error ? chalk.red(text) : text),
    subtitle(bar || `Learn more about us at ${chalk.underline('https://halfhelix.com')}`)
  )
}

function browserSyncNotice ({target, proxy}) {
  box(
    title('BrowserSync proxy ready for use'),
    subtitle(`Target: ${chalk.underline(target)}`),
    subtitle(`Proxy: ${chalk.underline(proxy)}`),
    subtitle(`\n${icon('arrowUp')} ${icon('arrowDown')} Listening for changes`),
  )
}

function error (e) {
  box(
    title('Error:'),
    e.message
  )

  log(e)
}

function uploadErrors (list) {
  box(
    'Errors:',
    ...list.map(item => `${icon('star')} ${item}`)
  )
}

function progressBar (title, total) {
  const bar = new cliProgress.SingleBar({
    barsize: 25,
    format: `${title} {bar} {percentage}% | Errors: {errors} | ETA: {eta}s | {value}/{total}`
  }, cliProgress.Presets.shades_classic);
  bar.start(total, 0, {
    errors: 0
  })

  return function (current, tokens) {
    bar.update(current, tokens)
    if (current >= total) {
      bar.stop()
    }
  }
}

module.exports = {
  splash,
  action,
  webpackResponse,
  completedAction,
  epilogue,
  browserSyncNotice,
  uploadErrors,
  progressBar,
  error
}