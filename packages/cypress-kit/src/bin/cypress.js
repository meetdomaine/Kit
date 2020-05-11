const cypress = require('cypress')
const configure = require('@halfhelix/configure')
const path = require('path')

const settings = configure({
  'cypress.viewportWidth': Number(process.env.VIEWPORT_WIDTH) || false,
  'cypress.cypressOnly': process.env.CYPRESS_ONLY || false,
  env: process.env.ENV
})

cypress.run({
  browser: settings['cypress.browser'],
  configFile: false,
  exit: settings['cypress.exit'],
  headless: settings['cypress.headless'],
  config: {
    integrationFolder: settings['cypress.integrationFolder'](
      settings,
      path.normalize(`${__dirname}/../specs`)
    ),
    supportFile: settings['cypress.supportFile'](
      settings,
      path.normalize(`${__dirname}/../cypress/support`)
    ),
    screenshotsFolder: settings['cypress.screenshotsFolder'](
      settings,
      path.normalize(`${__dirname}/../../tmp/screenshots`)
    ),
    videosFolder: settings['cypress.videosFolder'](
      settings,
      path.normalize(`${__dirname}/../../tmp/videos`)
    ),
    pluginsFile: settings['cypress.pluginsFile'](
      settings,
      path.normalize(`${__dirname}/../cypress/plugins.js`)
    ),
    baseUrl: settings['cypress.baseUrl'](
      settings,
      settings['cypress.base'](settings)
    ),
    video: settings['cypress.video']
  },
  env: {
    ...settings
  }
})
