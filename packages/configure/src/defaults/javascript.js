module.exports = {
  'js.hmr': true,
  'js.autoChunk': true,
  'js.autoprefixInDev': false,
  'js.chunkSortFunction': false,
  'js.overrideWebpack'(config, settings) {
    return config
  },
  'js.chunkNameFilter'(chunk, path) {
    return chunk
  }
}
