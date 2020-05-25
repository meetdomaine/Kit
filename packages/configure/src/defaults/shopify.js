module.exports = {
  'shopify.cdnPathVar': '__GLOBAL__.cdn',
  'shopify.addShopifyLoader': true,
  'shopify.clearGeneratedFiles'(settings) {
    return settings['css.chunk']
  },
  'shopify.generatedFiles'(settings) {
    return [settings['css.chunk.snippet']]
  },
  'shopify.defaultGeneratedFileContents': '<!-- File Emptied -->',
  'shopify.generatedFilesEmptiedContents'(token, value, settings) {
    return value
  }
}
