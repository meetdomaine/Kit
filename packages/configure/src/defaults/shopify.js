module.exports = {
  'shopify.cdnPathVar': '__GLOBAL__.cdn',
  'shopify.addShopifyLoader': true,
  'shopify.requestsPerInterval': 2,
  'shopify.limitRequestsPerIntervalToFive': true,
  'shopify.interval': 1000,
  'shopify.evenlyDistributedUpload': true,
  'shopify.retryUploadErrors': true,
  'shopify.shouldReRunError'(token, settings) {
    return /exceeded \d calls per second/i.test(token.message)
  },
  'shopify.clearGeneratedFiles'(settings) {
    return false
  },
  'shopify.restrictLiveTheme'(settings) {
    return false
  },
  'shopify.generatedFiles'(settings) {
    return [settings['css.chunk.snippet']]
  },
  'shopify.defaultGeneratedFileContents': '<!-- File Emptied -->',
  'shopify.generatedFilesEmptiedContents'(token, value, settings) {
    return value
  },
  'shopify.filterTokenBase'(base, path, file, settings) {
    return base
  },
  'shopify.filterTokens'(tokens, settings) {
    return tokens
  },
  'shopify.themeLogFile': '.kit-themes.json',
  'shopify.developmentThemeName'(settings, branch, username) {
    return `[DEV] ${branch} (${username})`
  }
}
