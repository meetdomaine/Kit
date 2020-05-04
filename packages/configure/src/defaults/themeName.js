module.exports = {
  'themeName.format' ({env}) {
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
  'themeName.override' (name, settings) {
    return name
  },
  'themeName.update' (settings) {
    return settings.env !== 'development' && settings.isCI()
  }
}