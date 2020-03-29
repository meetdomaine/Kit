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
  const original = `${settings['path.src']}/config/settings_schema.json`
  let content = ''
  if (configs.length) {
    content = configs.reduce((arr, path) => {
      const raw = fs.readFileSync(path, 'utf8').trim()
      raw && arr.push(raw)
      return arr
    }, []).join(',')
    content = `[${content}]`
  } else {
    if (fs.existsSync(original)) {
      content = fs.readFileSync(original, 'utf8').trim()
    }
  }

  files.push({
    original,
    content,
    file: `settings_schema.json`,
    destination: `${settings['path.dist']}/config/settings_schema.json`,
    theme: 'config/settings_schema.json'
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

  return Promise.resolve(true)
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
  await wait(2000)

  return Promise.resolve(true)
}

async function deployFile (event, file, settings) {
  if (!~['add', 'change'].indexOf(event)) {
    return Promise.resolve(false)
  }
  let files = (
    /src\/config/.test(file)
    ? await addInConfig([], settings)
    : sanitize([file])
  )
  if (!files.length) {
    return Promise.resolve(false)
  }

  await sync(settings).sync(files)

  return Promise.resolve(true)
}

module.exports = {
  deployFiles,
  buildTheme,
  deployFile
}