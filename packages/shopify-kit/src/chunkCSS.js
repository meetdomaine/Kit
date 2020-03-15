
const path = require('path')
const fs = require('fs-extra')

/**
 * This should be a global util function
 * since it has been repeated a number of times.
 * This helps with windows compatibility.
 *
 * @param {String} path
 */
function reverseSlashes (path) {
  return path.replace(/\\/g, '/')
}

/**
 * Takes the original array of Webpack compiled
 * files, filters to get only CSS and tokenizes
 * the relevant files in the array.
 *
 * @param {Array} files
 */
const getCSSFiles = files => {
  return files
  .filter(file => /\.css/.test(file) && fs.existsSync(file))
  .map(file => {
    const directory = reverseSlashes(file).split('/')
    const fileName = directory.pop()

    return {
      file,
      directory: path.normalize(directory.join('/')),
      mimeType: fileName.match(/(.[^.]*)(.*)/)[2],
      content: fs.readFileSync(file, 'utf8')
    }
  })
}

/**
 * Use the file path to determine which grouping
 * chunk it should be apart of.
 *
 * @param {String} path
 * @param {Object} settings
 */
function getChunkName (path, settings) {
  const split = path
    .replace(reverseSlashes(settings['path.src']), '')
    .split('/')
    .filter(val => val)

  return split[1] || 'general'
}

/**
 * In our glob loader, we add a special comment to understand
 * which CSS chunks relate to which original files. We use this
 * to split out the CSS into individual tokens.
 *
 * @param {Object} token
 */
const splitCSSByComment = (token, settings) => {
  return token.content.split('/*! path: ').reduce((obj, string) => {
    const path = string.match(/^(.*\.scss) \*\//)
    if (!path || !path[1]) {
      return obj
    }

    const group = getChunkName(path[1], settings)

    if (typeof obj[group] === 'undefined') {
      obj[group] = []
    }

    obj[group].push({
      file: token.file,
      module: path[1],
      original: '/*! path: ' + string,
      cleansed: string.replace(path[0], '')
    })

    return obj
  }, {})
}

/**
 * Now that we've grouped individual chunks of CSS
 * underneath their common groups, we filter out groups
 * that only have one module attached to it. We also filter out
 * any module groups that have been flagged as relevant to every
 * page.
 *
 * @param {Array} CSSChunkTokens
 * @param {Object} originalFile
 * @param {Object} settings
 */
const compileNewFiles = (CSSChunkTokens, originalFile, settings) => {
  return Object.keys(CSSChunkTokens).reduce((obj, key) => {
    if (CSSChunkTokens[key].length <= 1 || ~settings['css.chunk.globals'].indexOf(key)) {
      return obj
    }

    obj[key] = CSSChunkTokens[key].reduce((string, token) => {
      // When we add to the bundle, we take away from the original
      originalFile.content = originalFile.content.replace(token.original, '')
      string += token.cleansed
      return string
    }, '')
    return obj
  }, {})
}

/**
 * We actually write the new files to the dist directory now.
 * We return tokens that represent the new files.
 *
 * @param {Array} compiledChunkFiles
 * @param {Object} originalFile
 */
const writeNewFiles = (compiledChunkFiles, originalFile, settings) => {
  return Object.keys(compiledChunkFiles).map(key => {
    const file = `${key}${originalFile.mimeType}`
    const path = `${originalFile.directory}/${file}`

    !settings['css.chunk.inline'] && (
      fs.outputFileSync(path, compiledChunkFiles[key])
    )

    return {
      file,
      path,
      key,
      content: compiledChunkFiles[key]
    }
  })
}

/**
 * Generate the text that will go inside the Liquid snippet that
 * loads each CSS chunk on the correct page.
 *
 * @param {Array} writtenFiles
 * @param {Object} settings
 */
const createLiquidSnippet = (writtenFiles, settings, originalFile) => {
  let html = writtenFiles.reduce((string, token, i) => {
    string += `
      {% ${!i ? 'if' : 'elsif'} ${settings['css.chunk.conditionalFilter'](token, `request.page_type contains '${token.key}'`)} %}
       ${(settings['css.chunk.inline']
       ? token.content
       : generateStylesheetLinks(token, writtenFiles, settings))}`
    return string
  }, settings['css.chunk.inlineMainFile'] ? `${originalFile.content}\n\n` : '').replace(/\s\s/g,'')

  if (settings['css.chunk.inline']) {
    html += `{% endif %}`
  } else {
    html += `
    {% else %}
      ${generateStylesheetLinks({}, writtenFiles, settings)}
    {% endif %}
    `
  }

  return html.replace(/\s\s/g,'')
}

const generateStylesheetLinks = ({file = '', key = '', path = ''} = {}, allFiles, settings) => {
  const string = `
    ${file ? `<link type="text/css" href="{{ '${file}' | asset_url }}" rel="stylesheet">` : ''}
    ${allFiles.map(({file: _file, key: _key}) => (
      _key !== key ? generatePrefetchLink(_file) : ''
    )).join('')}
  `
  return settings['css.chunk.snippetFilter']({file, key, path}, string)
}

/**
 * A little helper function to write the prefetch link that
 * goes into the loader Liquid snippet.
 *
 * @param {String} file
 */
const generatePrefetchLink = file => {
  return file ? `<link rel="prefetch" href="{{ '${file}' | asset_url }}" as="style">` : ''
}

/**
 * Write the Liquid snippet to disk.
 *
 * @param {String} contents
 * @param {Object} settings
 */
const writeLiquidSnippet = (contents, settings) => {
  const snippetName = `${settings['path.dist']}/${settings['css.chunk.snippet']}`
  fs.outputFileSync(snippetName, contents)
  return snippetName
}


module.exports = async function (originalFiles, settings) {
  const cssFilesAsTokens = getCSSFiles(originalFiles)

  const newFiles = cssFilesAsTokens.map(originalFile => {
    const CSSChunkTokens = splitCSSByComment(originalFile, settings)
    const compiledChunkFiles = compileNewFiles(CSSChunkTokens, originalFile, settings)
    const writtenFiles = writeNewFiles(compiledChunkFiles, originalFile, settings)
    const liquidFileContents = createLiquidSnippet(writtenFiles, settings, originalFile)
    const snippetName = writeLiquidSnippet(liquidFileContents, settings)

    // Update original file
    fs.outputFileSync(originalFile.file, settings['css.chunk.inlineMainFile'] ? '' : originalFile.content)

    writtenFiles.push({path: snippetName})
    return writtenFiles.map(({path}) => path)
  })

  newFiles.push(originalFiles)
  return newFiles.flat()
}