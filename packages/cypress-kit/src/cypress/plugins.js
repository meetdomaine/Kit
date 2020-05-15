module.exports = (on, config) => {
  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.name === 'chrome') {
      launchOptions.push('--window-size=1600,1050')
      return launchOptions
    }
  })
}
