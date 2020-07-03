const path = require('path')
const fs = require('fs-extra')
const output = require('@halfhelix/terminal-kit')
const { reverseSlashes, getChunkName, logTokensWithoutCSS } = require('./util')

/**
 * Takes the original array of Webpack compiled
 * files, filters to get only CSS and tokenizes
 * the relevant files in the array.
 *
 * @param {Array} files
 */
const getCSSFiles = (files) => {
  return files
    .filter((file) => /\.css/.test(file) && fs.existsSync(file))
    .map((file) => {
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
      fileName: reverseSlashes(path[1]).split('/').pop(),
      original: '/*! path: ' + string,
      cleansed: string.replace(path[0], '')
    })

    return obj
  }, {})
}

const rollPartialsIntoChunks = (tokens, settings) => {
  let partials = {}
  for (key in tokens) {
    if (~Object.keys(settings['css.chunk.partials']).indexOf(key)) {
      partials[key] = tokens[key].slice(0)
      delete tokens[key]
    }
  }

  for (key in partials) {
    settings['css.chunk.partials'][key].forEach((chunk) => {
      tokens[chunk] = [...tokens[chunk], ...partials[key]]
    })
  }

  for (key in tokens) {
    tokens[key].sort((a, b) => {
      return a.module < b.module ? -1 : a.module > b.module ? 1 : 0
    })
  }

  return tokens
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
  const keys = Object.keys(CSSChunkTokens)

  settings['css.chunk.sortFunction']
    ? keys.sort(settings['css.chunk.sortFunction'])
    : keys.sort().reverse()

  return keys.reduce((obj, key) => {
    if (~(settings['css.chunk.globalFolders'] || []).indexOf(key)) {
      output.completedAction(`"${key}" rolled into main CSS bundle`)
      return obj
    }

    obj[key] = CSSChunkTokens[key].reduce((string, token) => {
      if (
        ~(settings['css.chunk.globalFiles'] || []).indexOf(token['fileName'])
      ) {
        output.completedAction(
          `"${token['fileName']}" rolled into main CSS bundle`
        )
        return string
      }
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
  return Object.keys(compiledChunkFiles).map((key) => {
    const file = `${key}${originalFile.mimeType}`
    const path = `${originalFile.directory}/${file}`

    !settings['css.chunk.inline'] &&
      fs.outputFileSync(path, compiledChunkFiles[key])

    return {
      file,
      path,
      key,
      written: !settings['css.chunk.inline'],
      content: compiledChunkFiles[key]
    }
  })
}

module.exports = {
  getCSSFiles,
  splitCSSByComment,
  rollPartialsIntoChunks,
  compileNewFiles,
  writeNewFiles
}
