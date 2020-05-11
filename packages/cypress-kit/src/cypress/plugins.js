module.exports = (on, config) => {
  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.name === 'chrome') {
      launchOptions.args.push('--window-size=1600,1050')
      return launchOptions
    }
  })
}
