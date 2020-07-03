const fs = require('fs-extra')
const wait = require('w2t')
const output = require('@halfhelix/terminal-kit')
const { reverseSlashes } = require('./lib/util')

const {
  getCSSFiles,
  splitCSSByComment,
  rollPartialsIntoChunks,
  compileNewFiles,
  writeNewFiles
} = require('./lib/tokenization')

const {
  writeLiquidSnippet,
  createLiquidSnippet
} = require('./lib/liquidSnippet')

/**
 * Find the single 'main' CSS file to process.
 *
 * @param {Array} originalFiles
 * @param {Object} settings
 */
module.exports = async function (originalFiles, settings) {
  const spinner = output.action(`Splitting CSS files into chunks`)
  await wait(1000)
  spinner.succeed()

  const cssFilesAsTokens = getCSSFiles(originalFiles)
  const fileToProcess = cssFilesAsTokens.find(
    (token) => ~token.file.indexOf(settings['css.chunk.fileToProcess'])
  )
  if (!fileToProcess) {
    output.completedAction(
      `CSS file matching ${settings['css.chunk.fileToProcess']} not found`
    )
    return Promise.resolve(true)
  }

  const newFiles = await processCSSFile(fileToProcess, settings)

  output.genericListBox(
    'Generated files from CSS splitting:',
    newFiles.map((path = '') => {
      return reverseSlashes(path).split('/').pop()
    })
  )

  if (settings['debug.cssSplitting']) {
    process.exit()
  }

  newFiles.push(originalFiles)
  return Promise.resolve(newFiles)
}

/**
 * Processes the CSS file by performing the following actions:
 * - Splits the file up via comments into groups
 * - Rolls up partials into module chunks
 * - Writes new CSS files from the resulting grouping
 * - Generates a Liquid snippet that can be sent up to Shopify
 *
 * @param {Object} originalFile
 * @param {Object} settings
 */
const processCSSFile = async (originalFile, settings) => {
  const CSSChunkTokens = splitCSSByComment(originalFile, settings)

  await rollPartialsIntoChunks(CSSChunkTokens, settings)
  // logWithout(CSSChunkTokens, ['original', 'cleansed'])
  const compiledChunkFiles = compileNewFiles(
    CSSChunkTokens,
    originalFile,
    settings
  )

  const writtenFiles = writeNewFiles(compiledChunkFiles, originalFile, settings)

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
}

module.exports.createLiquidSnippet = createLiquidSnippet
