const cypress = require('cypress')
const configure = require('@halfhelix/configure')
const path = require('path')

const settings = configure({
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
      path.resolve(settings['path.cwd'], 'cypress/specs')
    ),
    screenshotsFolder: settings['cypress.screenshotsFolder'](
      settings,
      path.resolve(settings['path.cwd'], 'cypress/report')
    ),
    videosFolder: settings['cypress.videosFolder'](
      settings,
      path.resolve(settings['path.cwd'], 'cypress/report')
    ),
    supportFile: settings['cypress.supportFile'](
      settings,
      path.resolve(settings['path.cwd'], 'cypress/support/support')
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
