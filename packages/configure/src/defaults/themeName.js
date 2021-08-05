module.exports = {
  // The theme naming format when overriding the
  // Shopify theme name after a deployment
  'themeName.format'({ env }) {
    if (env === 'production') {
      return '[LIVE] {context} - {branch} - {commit} - {date}'
    }
    if (env === 'staging') {
      return '[STAGE] {context} - {branch} - {commit} - {date}'
    }
    if (env === 'development') {
      return '[DEV] {name} - {date}'
    }
  },
  // Override the theme name after 'themeName.format' runs,
  // but before update has been made in Shopify
  'themeName.override'(name, settings) {
    return name
  },
  // Determines if the theme name should be updated or not
  'themeName.update'(settings) {
    return settings.env !== 'development' && settings.isCI()
  }
}
