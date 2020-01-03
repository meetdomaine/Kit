const { Console } = require('console')
const settings = require('@halfhelix/configure').settings
const fs = require('fs-extra')

let output, errorOutput

async function interceptConsole () {
  if (settings.debug) {
    return
  }
  fs.ensureFileSync(settings['path.stdout'])
  fs.ensureFileSync(settings['path.stderr'])
  output = fs.createWriteStream(settings['path.stdout'])
  errorOutput = fs.createWriteStream(settings['path.stderr'])
  console._stderr = errorOutput
  console._stdout = output
  console._interceptingStderr = true
  console._interceptingStdout = true
  console.penetrate = function (string) {
    process.stdout.write(string)
  }
}

function resetConsole (errorsOnly = true) {
  if (settings.debug) {
    return
  }

  console._stderr = process.stderr
  console._interceptingStderr = false

  if (errorsOnly) {
    return
  }

  console._stdout = process.stdout
  console._interceptingStdout = false
}

async function getLogs () {
  const stdout = await getLog('stdout')
  const stderr = await getLog('stderr')
  return {stdout, stderr}
}

async function getLog (log = 'stdout') {
  const file = (
    log === 'stdout'
    ? settings['path.stdout']
    : settings['path.stderr']
  )

  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      resolve(data)
    })
  })
}

module.exports = {
  interceptConsole,
  resetConsole,
  getLogs,
  getLog
}