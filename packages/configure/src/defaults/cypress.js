module.exports = {
  'cypress.browser': 'chrome',
  'cypress.password': '',
  'cypress.passwordSelector': 'input#password',
  'cypress.base': (settings) => {
    return `https://${settings.domain || settings.store}`
  },
  'cypress.sizes': [375, 1024, 1440],
  'cypress.viewportWidth': false,
  'cypress.viewportHeight': 1024,
  'cypress.pages': {},
  'cypress.withPercy': false,
  'cypress.exit': true,
  'cypress.headless': true,
  'cypress.video': false,
  'cypress.integrationFolder'(settings, value) {
    return value
  },
  'cypress.supportFile'(settings, value) {
    return value
  },
  'cypress.screenshotsFolder'(settings, value) {
    return value
  },
  'cypress.videosFolder'(settings, value) {
    return value
  },
  'cypress.pluginsFile'(settings, value) {
    return value
  },
  'cypress.baseUrl'(settings, value) {
    return value
  },
  'cypress.lastSizeOnly': false
}
