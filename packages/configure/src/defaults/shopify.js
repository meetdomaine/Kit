module.exports = {
  // Global variable to interpret in-browser to get the Shopify CDN value
  // We use this to load in relative JS chunks
  'shopify.cdnPathVar': '__GLOBAL__.cdn',
  // Add in our Shopify loader to interpret "{{ '' | asset_url }} tags in SCSS files
  'shopify.addShopifyLoader': true,
  // The amount of requests to send to Shopify at once when deploying theme assets
  'shopify.requestsPerInterval': 2,
  // Limit the amount of concurrent requests to Shopify to 5 requests per {interval}
  // We do this for performance reasons. More than 5 requests per second is discouraged
  'shopify.limitRequestsPerIntervalToFive': true,
  // Set interval that is used when deployment theme assets. Defaults to 1 second here
  'shopify.interval': 1000,
  // Evenly distribute requests within the interval
  'shopify.evenlyDistributedUpload': true,
  // Retry any upload errors after the initial deployment as a catch all
  'shopify.retryUploadErrors': true,
  // The error message that pushes a failed API call into the should rerun queue
  'shopify.shouldReRunError'(token, settings) {
    return /exceeded \d calls per second/i.test(token.message)
  },
  // Should remove the contents of "'shopify.generatedFiles'" before running a deployment
  'shopify.clearGeneratedFiles'(settings) {
    return false
  },
  // Do not allow the published Shopify theme to be deployed over
  'shopify.restrictLiveTheme'(settings) {
    return false
  },
  // An array of generated files to cleanse before running a deployment
  // This is useful when creating our CSS chunking snippet
  'shopify.generatedFiles'(settings) {
    return [settings['css.chunk.snippet']]
  },
  // The content to add to a cleansed file
  'shopify.defaultGeneratedFileContents': '<!-- File Emptied -->',
  // A filter to use to conditionally set the emptied file content
  'shopify.generatedFilesEmptiedContents'(token, value, settings) {
    return value
  },
  // Override the dist theme asset location after passing the src file location
  'shopify.filterTokenBase'(base, path, file, settings) {
    return base
  },
  // Override the array of tokenized theme assets before they are ingested by
  // the build and deploy commands (and "watch", tokens are generated asset
  // by asset when deploying a theme asset that is not bundled by Webpack after a
  // change event has been fired).
  'shopify.filterTokens'(tokens, settings) {
    return tokens
  },
  // The file that stores developer theme to branch correlations
  'shopify.themeLogFile': '.kit-themes.json'
}
