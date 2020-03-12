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
    /config\/lib/.test(file)
    ? await addInConfig([], settings)
    : sanitize([file])
  )
  if (!files.length) {
    return Promise.resolve(false)
  }

  await sync(settings).sync(files)

  return Promise.resolve(true)
}

function getChunkName (path, options) {
  const split = path
    .replace(reverseSlashes(options['path.src']), '')
    .split('/')
    .filter(val => val)

  return split[1] || 'general'
}

async function generateStyleSheets (originalFiles, settings) {
  const fileTokens = originalFiles
    .filter(file => /\.css/.test(file))
    .map(file => {
      return {
        file,
        content: fs.readFileSync(file, 'utf8')
      }
    })

  fileTokens.forEach(fileToken => {
    const tokens = fileToken.content.split('/*! path: ').reduce((obj, string) => {
      const path = string.match(/^(.*\.scss) \*\//)
      if (!path || !path[1]) {
        return obj
      }

      const group = getChunkName(path[1], settings)

      if (typeof obj[group] === 'undefined') {
        obj[group] = []
      }

      obj[group].push({
        file: fileToken.file,
        module: path[1],
        original: '/*! path: ' + string,
        cleansed: string.replace(path[0], '')
      })

      return obj
    }, {})

    const newFiles = Object.keys(tokens).reduce((obj, key) => {
      if (tokens[key].length <= 1) {
        return obj
      }

      obj[key] = tokens[key].reduce((string, token) => {

      }, '')
      return obj
    }, {})

    // const newFiles = Object.keys(filtered).reduce((obj, keu))map(key => {
    //   filtered[key] =
    // }) filtered.reduce((obj, key) => {
    //   if (tokens[key].length > 1) {
    //     obj[key] = tokens[key]
    //   }
    //   return obj
    // }, {})


    console.log(newFiles)
    return true
  })
  process.exit()
}

module.exports = {
  deployFiles,
  buildTheme,
  deployFile,
  generateStyleSheets
}