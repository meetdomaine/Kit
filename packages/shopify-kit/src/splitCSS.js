
const path = require('path')
const fs = require('fs-extra')

module.exports = async function (originalFiles, settings) {
  const fileTokens = originalFiles
    .filter(file => /\.css/.test(file))
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

  const outputtedFiles = fileTokens.map(fileToken => {
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
      if (tokens[key].length <= 1 || ~settings.splitCSSGlobalModules.indexOf(key)) {
        return obj
      }

      obj[key] = tokens[key].reduce((string, token) => {
        // When we add to the bundle, we take away from the original
        fileToken.content = fileToken.content.replace(token.original, '')
        string += token.cleansed
        return string
      }, '')
      return obj
    }, {})

    const outputtedFiles = Object.keys(newFiles).map(key => {
      const file = `${key}${fileToken.mimeType}`
      const path = `${fileToken.directory}/${file}`
      fs.outputFileSync(file, newFiles[key])
      return {
        file,
        path,
        key
      }
    })

    // replace existing file contents
    // fs.outputFileSync(fileToken.file, fileToken.content)

    const generatePrefetchLink = (file) => {
      return `<link rel="prefetch" href="{{ '${file}' | asset_url }}" as="style">`
    }

    const liquidFileContents = outputtedFiles.reduce((string, {file, key, path}) => {
      const defaultString = `
        {% if request.page_type contains '${key}' %}
        <link type="text/css" href="{{ '${file}' | asset_url }}" rel="stylesheet">
          ${outputtedFiles.map(({file: _file, key: _key}) => (
            _key !== key ? generatePrefetchLink(_file) : ''
          )).join('')}
        {% endif %}`
        string += settings.splitCSSConditionalFilter({file, key, path}, defaultString)
        return string
    }, '').replace(/\s\s/g,'')

    const snippetName = `${settings['path.dist']}/${settings['splitCSSLiquidSnippet']}`
    fs.outputFileSync(snippetName, liquidFileContents)
    outputtedFiles.push({path: snippetName})

    return outputtedFiles.map(({path}) => path)
  })

  outputtedFiles.push(originalFiles)

  return outputtedFiles.flat()
}

module.exports = generateStyleSheets