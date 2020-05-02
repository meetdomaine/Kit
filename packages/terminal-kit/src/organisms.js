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
  const text = foo || error ? 'Process completed with errors' : 'Process completed!'

  box(
    title(error ? chalk.red(text) : text),
    subtitle(bar || (
      error
      ? `${icon('arrowUp')} Check the output above`
      : `Learn more about us at ${chalk.underline('https://halfhelix.com')}`
    ))
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
    e.message ? title('Error:') : title(`Oh dang it!`),
    e.message || 'An error occurred'
  )

  log(e.toString())
}

function uploadErrors (list) {
  box(
    'Errors:',
    ...list.map(item => `${icon('star')} ${item}`)
  )
}

function progressBar (title, total, isCI) {
  if (isCI) {
    completedAction(`Start Progress: ${title}`)
  } else {
    const bar = new cliProgress.SingleBar({
      barsize: 25,
      format: `${title} {bar} {percentage}% | Errors: {errors} | ETA: {eta}s | {value}/{total}`
    }, cliProgress.Presets.shades_classic);
    bar.start(total, 0, {
      errors: 0
    })
  }

  return function (current, otherMetrics, fileToken) {
    if (isCI) {
      completedAction(`[${current} of ${total}, Errors: ${otherMetrics.errors}] ${fileToken.theme}`)
    } else {
      bar.update(current, otherMetrics)
      if (current >= total) {
        bar.stop()
      }
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