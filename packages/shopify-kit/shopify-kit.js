const globby = require('globby')
const fs = require('fs-extra')
const wait = require('w2t')

const {
  log,
  newLines,
  action,
  completedAction
} = require('@halfhelix/terminal-kit')
const sanitize = require('./src/fileTokenizationService')
const sync = require('./src/themeFileUploadService')
const chunkStylesheets = require('./src/stylesheetChunkingService')
const renameTheme = require('./src/renameThemeService')

function reverseSlashes(path) {
  return path.replace(/\\/g, '/')
}

async function getThemeFiles(settings) {
  return await globby(`${reverseSlashes(settings['path.src'])}/**/*.*`)
}

async function addInConfig(files, settings) {
  const configs = await globby(
    `${reverseSlashes(settings['path.src'])}/config/lib/*.json`
  )
  const original = `${settings['path.src']}/config/settings_schema.json`
  let content = ''
  if (configs.length) {
    content = configs
      .reduce((arr, path) => {
        const raw = fs.readFileSync(path, 'utf8').trim()
        raw && arr.push(raw)
        return arr
      }, [])
      .join(',')
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

async function deployFiles(compiledAssets = [], settings) {
  if (settings['css.chunk.testSplitting']) {
    files = sanitize(
      [],
      compiledAssets.filter((path) => {
        return (
          /[.]css/.test(path) || ~path.indexOf(settings['css.chunk.snippet'])
        )
      })
    )
  } else {
    files = sanitize(await getThemeFiles(settings), compiledAssets)
    await addInConfig(files, settings)
  }

  await sync(settings).sync(files)

  log(newLines())
  if (settings['themeName.update'](settings)) {
    await renameTheme(settings)
  }

  completedAction(
    `[${settings.theme}] Preview: https://${settings.store}?preview_theme_id=${settings.theme}`
  )

  return Promise.resolve(true)
}

async function buildTheme(settings) {
  const spinner = action('Copying theme files')

  const files = sanitize(await getThemeFiles(settings))

  await addInConfig(files, settings)

  files.forEach(async ({ original, destination, content = false }) => {
    content
      ? await fs.outputFile(destination, content)
      : fs.copySync(original, destination)

    return true
  })

  await wait(2000)
  spinner.succeed()
  await wait(2000)
  completedAction(`Created theme in "${settings['path.dist']}"`)
  await wait(2000)

  return Promise.resolve(true)
}

async function deployFile(event, file, settings) {
  if (!~['add', 'change'].indexOf(event)) {
    return Promise.resolve(false)
  }
  let files = /src\/config/.test(reverseSlashes(file))
    ? await addInConfig([], settings)
    : sanitize([file])
  if (!files.length) {
    return Promise.resolve(false)
  }

  await sync(settings).sync(files)

  return Promise.resolve(true)
}

async function prepareForDeployment(settings) {
  const spinner = action(`Setting theme "${settings['theme']}"`)
  await wait(1000)
  spinner.succeed()
  await cleanseFiles(settings)
  return Promise.resolve(true)
}

async function cleanseFiles(
  settings,
  files = settings['shopify.generatedFiles'](settings)
) {
  if (!settings['shopify.clearGeneratedFiles'](settings)) {
    return Promise.resolve(true)
  }
  for (let index in files) {
    await sync(settings, { label: 'Emptying' }).sync([
      {
        content: settings['shopify.generatedFilesEmptiedContents'](
          files[index],
          settings['shopify.defaultGeneratedFileContents'],
          settings
        ),
        theme: files[index]
      }
    ])
  }

  return Promise.resolve(true)
}

module.exports = {
  prepareForDeployment,
  deployFiles,
  buildTheme,
  deployFile,
  chunkStylesheets
}
