const fetch = require('node-fetch')
const fs = require('fs-extra')
const util = require('util')

function shopifyApiRequest(method, url, body, settings) {
  return fetch(`https://${settings.store}/admin${url}`, {
    method,
    headers: {
      'X-Shopify-Access-Token': settings.password,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: body ? JSON.stringify(body) : null
  }).then((response) => {
    return response.json()
  })
}

async function getTheme(settings) {
  console.log(settings)
  return shopifyApiRequest(
    'GET',
    `/themes/${settings.theme}.json`,
    false,
    settings
  )
}

function isProductionTheme(settings) {
  return settings.themeInfo.role === 'main'
}

function writeToLogFile(json) {
  fs.outputFileSync(`${__dirname}/critical.kit.log`, json)
}

module.exports = {
  shopifyApiRequest,
  getTheme,
  isProductionTheme,
  writeToLogFile
}
