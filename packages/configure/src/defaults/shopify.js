module.exports = {
  'shopify.cdnPathVar': '__GLOBAL__.cdn',
  'shopify.addShopifyLoader': true,
  'shopify.requestsPerInterval': 4,
  'shopify.interval': 1000,
  'shopify.evenlyDistributedUpload': true,
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
  }
}
