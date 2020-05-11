const spawn = require('cross-spawn')
const path = require('path')

module.exports = (settings) => {
  return new Promise((resolve, reject) => {
    const percy = path.resolve(__dirname, '../node_modules/.bin/percy')
    const exec = path.resolve(__dirname, './bin/cypress.js')

    process.env.BLUEBIRD_W_FORGOTTEN_RETURN = 0
    process.env.ENV = settings.env
    process.env.VIEWPORT_WIDTH = settings['cypress.viewportWidth']
    process.env.CYPRESS_ONLY = settings['cypress.cypressOnly']

    let p
    if (settings['cypress.withPercy']) {
      p = spawn(percy, ['exec', '--', 'node', exec], { stdio: 'inherit' })
    } else {
      p = spawn('node', [exec], { stdio: 'inherit' })
    }

    p.on('exit', resolve)
    p.on('error', reject)
  }).catch((e) => {
    console.log(e)
  })
}
