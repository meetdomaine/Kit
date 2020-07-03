const fs = require('fs-extra')

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

module.exports = {
  createLiquidSnippet,
  writeLiquidSnippet
}
