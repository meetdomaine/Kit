module.exports = {
  'css.mainFileName': '[name].min.css.liquid',
  'css.chunk': true,
  'css.chunk.globals': ['global', 'header', 'footer', 'nav'],
  'css.chunk.inline': false,
  'css.chunk.inlineMainFile': false,
  'css.chunk.snippet': 'snippets/stylesheets.liquid',
  'css.chunk.configureSplitting': true,
  'css.chunk.conditionalFilter'(obj, defaultString) {
    return defaultString
  },
  'css.chunk.firstConditionalProperty': 'request.page_type',
  'css.chunk.secondConditionalProperty': 'template.suffix',
  'css.chunk.folderDelimiter': '-',
  'css.chunk.snippetFilter'(obj, defaultString) {
    return defaultString
  }
}
