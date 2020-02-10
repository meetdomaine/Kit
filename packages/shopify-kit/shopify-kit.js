const globby = require('globby')
const fs = require('fs-extra')
const wait = require('w2t')
const {
  action,
  completedAction
} = require('@halfhelix/terminal-kit')
const sanitize = require('./src/sanitize')
const sync = require('./src/syncToShopify')

function reverseSlashes (path) {
  return path.replace(/\\/g, '/')
}

async function getThemeFiles (settings) {
  return await globby(`${reverseSlashes(settings['path.src'])}/**/*.*`)
}

async function addInConfig (files, settings) {
  const configs = await globby(`${reverseSlashes(settings['path.src'])}/config/lib/*.json`)
  const schema = configs.reduce((arr, path) => {
    const content = fs.readFileSync(path, 'utf8').trim()
    content && arr.push(content)
    return arr
  }, []).join(',')

  files.push({
    file: `settings_schema.json`,
    original: `${settings['path.src']}/config/settings_schema.json`,
    destination: `${settings['path.dist']}/config/settings_schema.json`,
    theme: 'config/settings_schema.json',
    content: `[${schema}]`,
  })

  return files
}

async function deployFiles (compiledAssets = [], settings) {
  files = sanitize(
    await getThemeFiles(settings),
    compiledAssets
  )

  await addInConfig(files, settings)
  await sync(settings).sync(files)
}

async function buildTheme (settings) {
  const spinner = action('Copying theme files')

  const files = sanitize(
    await getThemeFiles(settings)
  )

  await addInConfig(files, settings)

  files.forEach(async ({original, destination, content = false}) => {
    (
      content
      ? await fs.outputFile(destination, content)
      : fs.copySync(original, destination)
    )

    return true
  })

  await wait(2000)
  spinner.succeed()
  await wait(2000)
  completedAction(`Created theme in "${settings['path.dist']}"`)
  return await wait(2000)
}

async function deployFile (event, file, settings) {
  if (!~['add', 'change'].indexOf(event)) {
    return Promise.resolve(false)
  }
  let files = (
    /config\/lib/.test(file)
    ? await addInConfig([], settings)
    : sanitize([file])
  )
  if (!files.length) {
    return Promise.resolve(false)
  }
  return await sync(settings).sync(files)
}

module.exports = {
  deployFiles,
  buildTheme,
  deployFile
}