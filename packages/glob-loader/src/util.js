const globby = require('globby')
const path = require('path')

function reverseSlashes(path) {
  return path.replace(/\\/g, '/')
}

function getMatches(source, regex) {
  let matches = []
  let currentMatch = []
  while ((currentMatch = regex.exec(source)) !== null) {
    matches.push(currentMatch)
  }
  return matches.length
    ? matches.map((match) => ({
        full: match[0],
        match: path.normalize(match[1])
      }))
    : matches
}

function replaceRootDirectory(matches = [], options) {
  return matches.map(({ match, ...obj }) => ({
    ...obj,
    match: `${options['path.src']}/${match}`
  }))
}

function getChunkName(path, options) {
  const split = path
    .replace(reverseSlashes(options['path.src']), '')
    .split('/')
    .filter((val) => val)

  return split[1] || 'general'
}

async function getFilesViaGlob(token) {
  return await globby(reverseSlashes(token.match))
}

async function injectSassDependencies(token, options) {
  let files = await getFilesViaGlob(token)

  if (options.sortFunction && typeof options.sortFunction === 'function') {
    files = options.sortFunction(files, 'sass')
  }

  const imports = files
    .map((path) => {
      this.addDependency(path)
      return `/*! path: ${path} */ \n @import "${path}";`
    })
    .join('\n')
  options.source = options.source.replace(token.full, imports)
  return Promise.resolve()
}

function getModuleGroupDir(filePath) {
  return filePath
    .split('/')
    .pop()
    .replace(/[.]\D[^.]+$/, '')
}

async function injectJavascriptDependencies(token, options) {
  let files = await globby(reverseSlashes(token.match))

  if (options.sortFunction && typeof options.sortFunction === 'function') {
    files = options.sortFunction(files, 'javascript')
  }

  const headerString = `
  if (typeof window.__GLOB_MODULES__ === 'undefined') {
    window.__GLOB_MODULES__ = {}
  }

  if (!window.enqueueModule) {
    window.enqueueModule = function enqueueModule (n, params) {
      try {
        const initialized = __GLOB_MODULES__[n](params)
        if (typeof initialized.default !== 'undefined') {
          return Promise.resolve(initialized)
        } else {
          return initialized
        }
      } catch (e) {
        console.log(e)
        console.error('Module: "' + n +'" could not be loaded')
        return {
          default () {}
        }
      }
    }
  };\n`

  let importString = files.reduce((string, filePath) => {
    this.addDependency(filePath)
    const moduleName = getModuleGroupDir(filePath)
    const withoutAsync = moduleName.replace('async-', '')
    if (~moduleName.indexOf('async-')) {
      string += `window.__GLOB_MODULES__["${withoutAsync}"] = () => import(/* webpackChunkName: "${withoutAsync}" */ '${filePath}');\n`
    } else if (options['autoChunk']) {
      string += `window.__GLOB_MODULES__["${moduleName}"] = () => import(/* webpackChunkName: "${getChunkName(
        filePath,
        options
      )}" */ '${filePath}');\n`
    } else {
      string += `window.__GLOB_MODULES__["${moduleName}"] = () => require('${filePath}');\n`
    }
    return string
  }, headerString)

  options.source = options.source.replace(token.full, importString)
  return Promise.resolve()
}

module.exports = {
  getMatches,
  getChunkName,
  getFilesViaGlob,
  getModuleGroupDir,
  replaceRootDirectory,
  injectSassDependencies,
  injectJavascriptDependencies
}
