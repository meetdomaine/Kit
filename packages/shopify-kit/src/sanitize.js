const settings = require('@halfhelix/configure').settings

function filterOutFiles(path) {
  if (
    ~path.indexOf('src/assets/css') ||
    ~path.indexOf('src/assets/scss') ||
    ~path.indexOf('src/assets/js') ||
    ~path.indexOf('src/config') ||
    ~path.indexOf('.html') ||
    !~path.indexOf('src') ||
    (!~path.indexOf('src/assets') && /.*[.](s?css|js|vue)$/.test(path)) ||
    !path
  ) {
    return false
  }
  return true
}

function reverseSlashes(path) {
  return path.replace(/\\/g, '/')
}

function createTokens(path) {
  path = reverseSlashes(path)

  const src = file.replace(/(.*)([.]section|[.]template)([.]liquid)/, '$1$3')
  const base = getBase(path)

  const destination = /.*[.](css|js|svg|jpe?g|gif|png)$/.test(path)
    ? {
        absolute: `${reverseSlashes(settings['path.dist'])}/assets/${src}`,
        relative: `assets/${src}`
      }
    : {
        absolute: `${reverseSlashes(settings['path.dist'])}/${base}/${src}`,
        relative: `${base}/${src}`
      }

  return {
    file,
    original: path,
    destination: destination.absolute,
    theme: destination.relative,
    contents: false
  }
}

function getBase(path) {
  const file = path.split('/').pop()

  if (/template/.test(path) && /[.]liquid/.test(file)) {
    if (/templates\/customers/.test(path)) {
      base = 'templates/customers'
    } else {
      base = 'templates'
    }
  } else if (/section/.test(path) && !/snippet/.test(path)) {
    base = 'sections'
  } else if (/locales\//.test(path)) {
    base = 'locales'
  } else if (/layout\//.test(path)) {
    base = 'layout'
  } else if (/(?:s?css|js)[.]liquid$/.test(file)) {
    base = 'assets'
  } else if (!/[.]liquid$/.test(file)) {
    base = 'assets'
  } else {
    base = 'snippets'
  }

  return base
}

function createCompiledAssetTokens(path) {
  path = reverseSlashes(path)
  return {
    file: path.split('/').pop(),
    original: path,
    destination: path,
    theme: `${getBase(path)}/${path.split('/').pop()}`,
    contents: false
  }
}

function init(files = [], compiledAssets = []) {
  files = files.filter(filterOutFiles).map(createTokens)
  if (compiledAssets.length) {
    files = files.concat(compiledAssets.map(createCompiledAssetTokens))
  }
  return files
}

module.exports = init
