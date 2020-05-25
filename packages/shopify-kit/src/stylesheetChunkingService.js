const path = require('path')
const fs = require('fs-extra')
const util = require('util')
const wait = require('w2t')
const output = require('@halfhelix/terminal-kit')

/**
 * This should be a global util function
 * since it has been repeated a number of times.
 * This helps with windows compatibility.
 *
 * @param {String} path
 */
function reverseSlashes(path) {
  return path.replace(/\\/g, '/')
}

function writeToLogFile(json) {
  fs.outputFileSync(
    `${__dirname}/critical.kit.log`,
    util.inspect(json, true, 10)
  )
}

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
 * Use the file path to determine which grouping
 * chunk it should be apart of.
 *
 * @param {String} path
 * @param {Object} settings
 */
function getChunkName(path, settings) {
  const split = path
    .replace(reverseSlashes(settings['path.src']), '')
    .split('/')
    .filter((val) => val)

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
      fileName: reverseSlashes(path[1]).split('/').pop(),
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

/**
 * Generate the text that will go inside the Liquid snippet that
 * loads each CSS chunk on the correct page.
 *
 * @param {Array} writtenFiles
 * @param {Object} settings
 */
const createLiquidSnippet = (writtenFiles, settings, originalFile) => {
  let html = writtenFiles
    .reduce((string, token, i) => {
      string += `
      {% ${!i ? 'if' : 'elsif'} ${settings['css.chunk.conditionalFilter'](
        token,
        generateRenderConditional(token.key, settings)
      )} %}
       ${
         settings['css.chunk.inline']
           ? `{% raw %}<style>${token.content}</style>{% endraw %}`
           : generateStylesheetLinks(token, writtenFiles, settings)
       }`
      return string
    }, '')
    .replace(/\s\s/g, '')

  if (settings['css.chunk.inline']) {
    html += `{% endif %}`
  } else {
    html += `
    {% else %}
      ${generateStylesheetLinks({}, writtenFiles, settings)}
    {% endif %}
    `
  }

  return html
    .replace(/\s\s/g, '')
    .split('<link')
    .join('\n<link')
    .split('{%')
    .join('\n{%')
}
/**
 * Here, we generate the Liquid conditional that dictates
 * which CSS files are prefetched and which are called
 * directly.
 *
 * @param {String} folderName
 * @param {Object} settings
 */
const generateRenderConditional = (folderName, settings) => {
  if (
    Object.keys(settings['css.chunk.conditionalFolderMapping'] || {}).length &&
    typeof settings['css.chunk.conditionalFolderMapping'][folderName] !==
      'undefined'
  ) {
    output.completedAction(
      `"${folderName}" conditional updated to "${settings['css.chunk.conditionalFolderMapping'][folderName]}"`
    )
    folderName = settings['css.chunk.conditionalFolderMapping'][folderName]
  }

  const delimiter = settings['css.chunk.folderDelimiter']
  const split = folderName.split(delimiter)
  const prop1 = settings['css.chunk.firstConditionalProperty']
  const prop2 = settings['css.chunk.secondConditionalProperty']
  const prop1EqualityConditional =
    settings['css.chunk.firstEqualityConditional']
  const prop2EqualityConditional =
    settings['css.chunk.secondEqualityConditional']

  if (split.length <= 1) {
    return `${prop1} ${prop1EqualityConditional || '=='} '${folderName}'`
  }

  return `${prop1} ${
    prop1EqualityConditional || '=='
  } '${split.shift()}' and ${prop2} ${
    prop2EqualityConditional || '=='
  } '${split.join(delimiter)}'`
}

/**
 * Generates the stylesheet links, not the prefetch
 * links (we do this in the following function).
 *
 * @param {Object} Token
 * @param {Array} allFiles
 * @param {Object} settings
 */
const generateStylesheetLinks = (
  { file = '', key = '', path = '' } = {},
  allFiles,
  settings
) => {
  const string = `
    ${
      file
        ? `<link type="text/css" href="{{ '${file.replace(
            '.liquid',
            ''
          )}' | asset_url }}" rel="stylesheet">`
        : ''
    }
    ${allFiles
      .map(({ file: _file, key: _key }) =>
        _key !== key ? generatePrefetchLink(_file) : ''
      )
      .join('')}
  `
  return settings['css.chunk.snippetFilter']({ file, key, path }, string)
}

/**
 * A little helper function to write the prefetch link that
 * goes into the loader Liquid snippet.
 *
 * @param {String} file
 */
const generatePrefetchLink = (file) => {
  return file
    ? `<link rel="prefetch" href="{{ '${file.replace(
        '.liquid',
        ''
      )}' | asset_url }}" as="style">`
    : ''
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
  const spinner = output.action(`Splitting CSS files into chunks`)
  await wait(1000)
  spinner.succeed()

  const cssFilesAsTokens = getCSSFiles(originalFiles)

  const newFiles = cssFilesAsTokens.map((originalFile) => {
    const CSSChunkTokens = splitCSSByComment(originalFile, settings)
    const compiledChunkFiles = compileNewFiles(
      CSSChunkTokens,
      originalFile,
      settings
    )
    const writtenFiles = writeNewFiles(
      compiledChunkFiles,
      originalFile,
      settings
    )

    const liquidFileContents = createLiquidSnippet(
      writtenFiles,
      settings,
      originalFile
    )

    const snippetName = writeLiquidSnippet(liquidFileContents, settings)
    writtenFiles.push({ path: snippetName, written: true })

    // Update original file
    if (
      !settings['debug.cssSplitting'] &&
      settings['css.chunk.updateOriginalFile']
    ) {
      fs.outputFileSync(originalFile.file, originalFile.content)
    }

    return writtenFiles.filter(({ written }) => written).map(({ path }) => path)
  })

  output.genericListBox(
    'Generated files from CSS splitting:',
    newFiles.flat().map((path = '') => {
      return reverseSlashes(path).split('/').pop()
    })
  )

  if (settings['debug.cssSplitting']) {
    process.exit()
  }

  newFiles.push(originalFiles)
  return newFiles.flat()
}
