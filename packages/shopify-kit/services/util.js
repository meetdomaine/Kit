const fetch = require('node-fetch')
const fs = require('fs-extra')
const { getUsername } = require('@halfhelix/configure').utils

function shopifyApiRequest(method, url, body, settings) {
  return fetch(
    `https://${
      /^shptka_/.test(settings.password)
        ? 'theme-kit-access.shopifyapps.com/cli'
        : settings.store
    }/admin/api/unstable${url}`,
    {
      method,
      headers: {
        'X-Shopify-Access-Token': settings.password,
        'X-Shopify-Shop': settings.store,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: body ? JSON.stringify(body) : null
    }
  ).then((response) => {
    return response.json()
  })
}

async function getTheme(settings, themeId = false) {
  return shopifyApiRequest(
    'GET',
    `/themes/${themeId || settings.theme}.json`,
    false,
    settings
  )
}

async function createTheme(settings, branch) {
  return shopifyApiRequest(
    'POST',
    `/themes.json`,
    {
      theme: {
        name: `${settings['themeName.developmentThemeFormat'](
          settings,
          branch,
          await getUsername()
        )}`,
        role: 'development'
      }
    },
    settings
  )
}

async function deleteTheme(settings, themeId) {
  return shopifyApiRequest('DELETE', `/themes/${themeId}.json`, false, settings)
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
  writeToLogFile,
  createTheme,
  deleteTheme
}
