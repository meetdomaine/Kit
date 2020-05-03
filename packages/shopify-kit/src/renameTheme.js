const { exec } = require('child_process')
const fetch = require('node-fetch')
const {
  error,
  completedAction
} = require('@halfhelix/terminal-kit')

const getCommit = () => {
  return new Promise((resolve) => {
    exec('git rev-parse HEAD | cut -c1-7', (err, stdout, stderr) => {
      resolve(stdout)
    })
  })
}

const getDate = () => {
  return new Promise((resolve) => {
    exec("date +'%m.%d.%y'", (err, stdout, stderr) => {
      resolve(stdout)
    })
  })
}

const getBranch = () => {
  return new Promise((resolve) => {
    exec('git rev-parse --abbrev-ref HEAD', (err, stdout, stderr) => {
      resolve(stdout)
    })
  })
}

const getUsername = () => {
  return new Promise((resolve) => {
    exec('git config user.name', (err, stdout, stderr) => {
      resolve(stdout)
    })
  })

}
const formatName = async (settings, format) => {
  const commit = await getCommit()
  const date = await getDate()
  const branch = await getBranch()
  const username = await getUsername()
  return format
    .replace('{context}', settings.isCI() ? 'CI' : '💻')
    .replace('{branch}', branch.trim().split('/').pop())
    .replace('{commit}', commit.trim())
    .replace('{date}', date.trim())
    .replace('{name}', settings.username || username.split(' ').shift())
}

module.exports = async (settings) => {
  const themeName = await formatName(settings, settings['themeName.format'](settings))
  const finalThemeName = settings['themeName.override'](themeName, settings)
  return fetch(`https://${settings.store}/admin/themes/${settings.theme}.json`, {
    method: 'put',
    headers: {
      'X-Shopify-Access-Token': settings.password,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      theme: {
        id: settings.theme,
        name: finalThemeName
      }
    })
  }).then(response => {
    return response.json()
  }).then(json => {
    if (json.errors) {
      error(JSON.stringify(json.errors))
    }
    completedAction(`[${settings.theme}] Name updated: ${finalThemeName}`)
    return Promise.resolve()
  })
}