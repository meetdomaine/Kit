const fetch = require('node-fetch')
const { error, completedAction, warning } = require('@halfhelix/terminal-kit')
const { getCommit, getDate, getBranch, getUsername } =
  require('@halfhelix/configure').utils

const formatName = async (settings, format = '') => {
  const commit = await settings['git.getCommit'](settings, getCommit)
  const date = await settings['git.getDate'](settings, getDate)
  const branch = await settings['git.getBranch'](settings, getBranch)
  const username = await settings['git.getUsername'](settings, getUsername)

  return format
    .replace('{context}', settings.isCI() ? 'CI' : '💻')
    .replace('{branch}', branch.split('/').pop())
    .replace('{commit}', commit)
    .replace('{date}', date)
    .replace('{name}', username.split(' ').shift())
}

module.exports = async (settings) => {
  const themeName = await formatName(
    settings,
    settings['themeName.format'](settings)
  )
  const finalThemeName = settings['themeName.override'](themeName, settings)

  if (!finalThemeName) {
    warning(
      `Theme name cannot be blank (check theme.{value} exists in themeName.format setting)`
    )
    return Promise.resolve()
  }
  return fetch(
    `https://${settings.store}/admin/themes/${settings.theme}.json`,
    {
      method: 'put',
      headers: {
        'X-Shopify-Access-Token': settings.password,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        theme: {
          id: settings.theme,
          name: finalThemeName
        }
      })
    }
  )
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      if (json.errors) {
        error(JSON.stringify(json.errors))
      }
      completedAction(`[${settings.theme}] Name updated: ${finalThemeName}`)
      return Promise.resolve()
    })
}
