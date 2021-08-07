const {
  error,
  box,
  completedAction,
  title,
  subtitle,
  newLines
} = require('@halfhelix/terminal-kit')
const { getBranch, writeJson, readThemeLogFile } =
  require('@halfhelix/configure').utils
const { getTheme, createTheme, deleteTheme } = require('./../util')

const outputThemeInformation = (settings, theme) => {
  box(
    subtitle(`Customize this theme in the Online Store Editor:`),
    subtitle(`https://${settings.store}/admin/themes/${theme.id}/editor`),
    newLines(),
    subtitle(`Share this theme preview:`),
    subtitle(`https://${settings.store}/?preview_theme_id=${theme.id}`),
    newLines(),
    title('Theme information:'),
    subtitle(`Theme name: ${theme.name}`),
    subtitle(`Theme id: ${theme.id}`)
  )
}

const initializeTheme = async (settings) => {
  const branch = await settings['git.getBranch'](settings, getBranch)
  const themeLog = readThemeLogFile(settings)
  if (themeLog[branch]) {
    const { theme } = await getTheme(settings, themeLog[branch])
    completedAction(`Existing theme for branch "${themeLog[branch]}" found.`)
    outputThemeInformation(settings, theme)
    return
  }

  const { theme } = await createTheme(settings, branch)
  outputThemeInformation(settings, theme)
  writeJson(`${settings['path.cwd']}/${settings['shopify.themeLogFile']}`, {
    ...themeLog,
    [branch]: theme.id
  })
}

const fetchTheme = async (settings) => {
  const branch = await settings['git.getBranch'](settings, getBranch)
  const themeLog = readThemeLogFile(settings)
  if (themeLog[branch]) {
    const { theme } = await getTheme(settings, themeLog[branch])
    completedAction(`Existing theme for branch "${branch}" found.`)
    outputThemeInformation(settings, theme)
    return
  } else {
    completedAction(`Existing theme for branch "${branch}" not found.`)
  }
}

const destroyTheme = async (settings) => {
  const branch = await settings['git.getBranch'](settings, getBranch)
  const themeLog = readThemeLogFile(settings)
  if (!themeLog[branch]) {
    error(
      new Error(`Existing theme for branch "${themeLog[branch]}" not found.`),
      false,
      true
    )
    return
  }
  await deleteTheme(settings, themeLog[branch])
  delete themeLog[branch]
  writeJson(`${settings['path.cwd']}/${settings['shopify.themeLogFile']}`, {
    ...themeLog
  })
  completedAction(`Theme for branch "${branch}" deleted.`)
}

module.exports = async (action, options, settings) => {
  if (action === 'init') {
    await initializeTheme(settings)
  }
  if (action === 'info') {
    await fetchTheme(settings)
  }
  if (action === 'destroy') {
    await destroyTheme(settings)
  }
}
