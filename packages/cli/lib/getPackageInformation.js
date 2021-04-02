const fetch = require('node-fetch')

module.exports.getPackageInformation = (package) => {
  return fetch(`https://registry.npmjs.org/${package}`)
    .then((response) => {
      return response.json()
    })
    .then(
      ({ name = '', 'dist-tags': distTags = {}, maintainers = [] } = {}) => {
        const response = {
          name,
          distTags,
          maintainers
        }
        if (distTags.latest) {
          response['version'] = distTags.latest
        }
        return Promise.resolve(response)
      }
    )
    .catch((error) => {
      return Promise.resolve({})
    })
}

module.exports.getVersionDetails = (details, version) => {
  if (details.version) {
    return {
      message: `${details.version} (latest: ${details.version})`,
      isCurrent: '' + details.version === '' + version
    }
  }
  return {
    message: version || '',
    isCurrent: false
  }
}
