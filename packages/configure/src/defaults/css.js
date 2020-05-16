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
  'css.chunk.updateOriginalFile': true
}
