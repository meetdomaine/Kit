const fs = require('fs-extra')
const output = require('@halfhelix/terminal-kit')
const liquidTemplate = require('./liquidSnippetTemplate')
const { shouldRenderCritical } = require('./util')

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

  if (
    settings['css.chunk.inline'] ||
    !settings['css.chunk.createPreRenderLinks']
  ) {
    html += `{% endif %}`
  } else {
    html += `
    {% else %}
      ${generateStylesheetLinks({}, writtenFiles, settings)}
    {% endif %}
    `
  }

  return addWhiteSpaceBeforeEachLine(
    applyLiquidTemplate(html, originalFile, settings)
  )
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
const generateStylesheetLinks = (token = {}, allFiles, settings) => {
  const { file = '', key = '', path = '' } = token
  const string = `
    ${file ? generateStylesheetLink(token, settings) : ''}
    ${
      (settings['css.chunk.createPreRenderLinks'] &&
        allFiles
          .map(({ file: _file, key: _key }) =>
            _key !== key ? generatePrefetchLink(_file) : ''
          )
          .join('')) ||
      ''
    }
  `
  return settings['css.chunk.snippetFilter']({ file, key, path }, string)
}

const generateStylesheetLink = (token, settings) => {
  const assetPath = token.file.replace('.liquid', '')

  if (shouldRenderCritical(token.key, settings)) {
    return `
    ${
      token.critical ? settings['css.chunk.criticalChunk'](token, settings) : ''
    }
    ${settings['css.chunk.deferredChunkLink'](assetPath, settings)}
    `
  } else {
    return `<link type="text/css" href="{{ '${assetPath}' | asset_url }}" rel="stylesheet">`
  }
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

const applyLiquidTemplate = (html, originalFile, settings) => {
  if (!settings['css.chunk.critical']) {
    return html
  }
  return settings['css.chunk.filterLiquidSnippetTemplate'](
    liquidTemplate,
    settings
  )
    .replace(
      settings['css.chunk.filterLiquidSnippetTag']('<!-- styles -->', settings),
      html
    )
    .replace(
      settings['css.chunk.filterLiquidSnippetTag'](
        '<!-- critical-main -->',
        settings
      ),
      settings['css.chunk.criticalChunk'](originalFile) +
        settings['css.chunk.deferredChunkLink'](
          originalFile.nonCriticalFileName.replace('.liquid', '')
        )
    )
    .replace(
      settings['css.chunk.filterLiquidSnippetTag'](
        '<!-- non-critical-main -->',
        settings
      ),
      settings['css.chunk.defaultCSSInclude'](
        originalFile.fileName.replace('.liquid', '')
      )
    )
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

const addWhiteSpaceBeforeEachLine = (html) => {
  return html
    .replace(/\s\s/g, '')
    .replace(/({%|(?<=%}){{|<noscript|(?<!noscript>)<link|<style)/g, '\n$1')
}

module.exports = {
  createLiquidSnippet,
  writeLiquidSnippet
}
