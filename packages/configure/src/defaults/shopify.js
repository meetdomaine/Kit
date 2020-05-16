module.exports = {
  'shopify.cdnPathVar': '__GLOBAL__.cdn',
  'shopify.addShopifyLoader': true,
  'shopify.generatedFiles'(settings) {
    return [settings['css.chunk.snippet']]
  },
  'shopify.defaultGeneratedFileContents':
    '{% comment %}File Emptied{% endcomment %}',
  'shopify.generatedFilesEmptiedContents'(token, value, settings) {
    return value
  }
}
