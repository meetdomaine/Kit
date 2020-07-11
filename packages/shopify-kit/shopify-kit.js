const globby = require('globby')
const fs = require('fs-extra')
const wait = require('w2t')
const {
  log,
  newLines,
  action,
  completedAction
} = require('@halfhelix/terminal-kit')
const sanitize = require('./services/tokenization')
const sync = require('./services/assetUpload')
const chunkStylesheets = require('./services/stylesheetChunking')
const renameTheme = require('./services/themeNaming')
const { isProductionTheme } = require('./services/util')

/**
 * We do this for windows support.
 *
 * @param {String} path
 */
function reverseSlashes(path) {
  return path.replace(/\\/g, '/')
}

/**
 * Get a list of file names from the local directory
 * using a Glob package.
 *
 * @param {Object} settings
 */
async function getThemeFiles(settings) {
  return await globby(`${reverseSlashes(settings['path.src'])}/**/*.*`)
}

/**
 * Supports the ability to split the Shopify config
 * file into more digestible partials. Here, we get
 * these partials and concat them into a master json
 * object that gets sent to Shopify.
 *
 * @param {Array} files
 * @param {Object} settings
 */
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

/**
 * This is called after Webpack does it's compiling.
 * The compiled Webpack assets are passed in, and we then
 * concat them with non-compiled theme assets and
 * standardize them into tokens before sending them
 * to Shopify via the API.
 *
 * @param {Array} compiledAssets
 * @param {Object} settings
 */
async function deployFiles(compiledAssets = [], settings) {
  if (settings['css.chunk.testSplitting'] || settings.task === 'critical') {
    files = sanitize(
      [],
      compiledAssets.filter((path) => {
        return (
          /[.]css/.test(path) || ~path.indexOf(settings['css.chunk.snippet'])
        )
      })
    ).filter((token) =>
      settings['css.chunk.criticalUploadFilter'](token, settings)
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

/**
 * This function has similarities to the deploy
 * function above but we simple build the theme
 * and spit out the theme files locally without
 * sending them through to Shopify.
 *
 * @param {Object} settings
 */
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

/**
 * This allows the deployment of a single file
 * rather than the whole theme. This is used for
 * one-off file change events.
 *
 * @param {String} event
 * @param {String} file
 * @param {Object} settings
 */
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

/**
 * This is a rather new introduction. It allows
 * us to perform some setup steps before our
 * primary watch|build|deploy commands. We use this
 * to conditionally clear any compiled files from
 * the Shopify theme. This is relevant to the OOTB
 * code splitting functionality we've built it.
 *
 * @param {Object} settings
 */
async function prepareForDeployment(settings) {
  const spinner = action(`Setting theme "${settings['theme']}"`)
  !settings['quick'] && (await wait(1000))
  spinner.succeed()
  await cleanseFiles(settings, settings['shopify.generatedFiles'](settings))
  return Promise.resolve(true)
}

/**
 * Conditionally clear an array of theme assets.
 *
 * @param {Object} settings
 * @param {Array} files
 */
async function cleanseFiles(settings, files) {
  if (!settings['shopify.clearGeneratedFiles'](settings)) {
    return Promise.resolve(true)
  }
  if (settings['shopify.dontClearOnLive']) {
    const spinner = action(`Checking if this is the production theme`)
    if (await isProductionTheme(settings)) {
      spinner.succeed()
      throw new Error('Warning! This is the production theme. Exiting')
    }
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
