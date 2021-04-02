module.exports = {
  'js.hmr': true,
  'js.autoChunk': true,
  'js.autoprefixInDev': false,
  'js.chunkSortFunction': false,
  'js.overrideWebpack'(config, settings) {
    return config
  },
  'js.filterWebpackMode'(mode, settings) {
    return mode
  },
  'js.filterWebpackDevTool'(devTool, settings) {
    return devTool
  },
  'js.filterWebpackStats'(stats, settings) {
    return stats
  },
  'js.filterWebpackPerformance'(performance, settings) {
    return performance
  },
  'js.chunkNameFilter'(chunk, path) {
    return chunk
  }
}
