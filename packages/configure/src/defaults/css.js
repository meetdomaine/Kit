module.exports = {
  'css.mainFileName': '[name].min.css.liquid',
  'css.chunk': true,
  'css.chunk.globals': ['global', 'header', 'footer', 'nav'],
  'css.chunk.inline': true,
  'css.chunk.inlineMainFile': false,
  'css.chunk.snippet': 'snippets/stylesheets.liquid',
  'css.chunk.conditionalFilter'(obj, defaultString) {
    return defaultString
  },
  'css.chunk.snippetFilter'(obj, defaultString) {
    return defaultString
  }
}
