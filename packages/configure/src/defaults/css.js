module.exports = {
  'css.mainFileName': '[name].min.css.liquid',
  'css.lintStyles': true,
  'css.stylelintPaths'(settings) {
    return [
      // `src/assets/css/**/*.scss`,
      `src/assets/scss/**/*.scss`,
      `src/modules/**/*.scss`,
      `src/sections/**/*.scss`
    ]
  },
  'css.chunk': false,
  'css.chunk.fileToProcess': 'main.min.css',
  'css.chunk.globalFolders': ['global'],
  'css.chunk.globalFiles': [],
  'css.chunk.inline': false,
  'css.chunk.snippet': 'snippets/stylesheets.liquid',
  'css.chunk.testSplitting': false,
  'css.chunk.sortFunction': false,
  'css.chunk.conditionalFilter'(obj, defaultString) {
    return defaultString
  },
  'css.chunk.conditionalFolderMapping': {},
  'css.chunk.firstConditionalProperty': 'request.page_type',
  'css.chunk.secondConditionalProperty': 'template.suffix',
  'css.chunk.firstEqualityConditional': 'contains',
  'css.chunk.secondEqualityConditional': 'contains',
  'css.chunk.folderDelimiter': '-',
  'css.chunk.snippetFilter'(obj, defaultString) {
    return defaultString
  },
  'css.chunk.createPreRenderLinks': false,
  'css.chunk.updateOriginalFile': true,
  'css.chunk.defaultCSSInclude'(settings) {
    return `{{ 'main.min.css' | asset_url | stylesheet_tag }}`
  },
  'css.chunk.critical'(settings) {
    return !!settings['css.chunk']
  },
  'css.chunk.partials': {
    reviews: ['product']
  },
  'css.chunk.criticalWhitelist': [],
  'css.chunk.criticalChunk'(token, settings) {
    return `<style data-critical data-kit>${token.critical}</style>`
  },
  'css.chunk.deferredChunkLink'(assetPath, settings) {
    return `
      <link rel="preload" href="{{ '${assetPath}' | asset_url }}" as="style" onload="this.onload=null;this.rel='stylesheet'" data-kit>
      <noscript><link rel="stylesheet" href="{{ '${assetPath}' | asset_url }}"></noscript>
      `
  },
  'css.chunk.filterLiquidSnippetTemplate'(template, settings) {
    return template
  },
  'css.chunk.filterLiquidSnippetTag'(tag, settings) {
    return tag
  },
  'css.chunk.criticalUploadFilter'(token, settings) {
    if (settings.upload) {
      return new RegExp(`main|snippet|${settings.upload}`).test(token.theme)
    }

    return true
  }
}
