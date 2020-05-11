const spawn = require('cross-spawn')
const path = require('path')

module.exports = (settings) => {
  return new Promise((resolve, reject) => {
    const exec = path.resolve(__dirname, './bin/cypress.js')

    process.env.BLUEBIRD_W_FORGOTTEN_RETURN = 0
    process.env.ENV = settings.env

    const p = spawn('node', [exec], { stdio: 'inherit' })
    p.on('exit', resolve)
    p.on('error', reject)
  }).catch((e) => {
    console.log(e)
  })
}
