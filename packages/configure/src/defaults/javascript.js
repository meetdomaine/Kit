module.exports = {
  // Enable Hot Module Reloading in "watch" command
  'js.hmr': true,
  // Relevant to: "./packages/glob-loader"
  // Sets "import(/* webpackChunkName: {name}..."
  // This is set based on the module file's top level directory
  'js.autoChunk': true,
  // Relevant to: "./packages/glob-loader"
  // Sorts JS and SCSS modules chunks before they are added to the bundle
  // in our custom Webpack glob-loader
  'js.chunkSortFunction': false,
  // Relevant to: "./packages/glob-loader"
  // Overwrite the name of the JS Webpack chunk. The default for this is a
  // module's top level directory name
  'js.chunkNameFilter'(chunk, path) {
    return chunk
  },
  // Filter the generated Webpack config before it is passed to Webpack
  'js.filterWebpackConfig'(config, settings) {
    return config
  },
  // Filter the Webpack "mode" setting
  'js.filterWebpackMode'(mode, settings) {
    return mode
  },
  // Filter the Webpack "devTool" setting
  'js.filterWebpackDevTool'(devTool, settings) {
    return devTool
  },
  // Filter the Webpack "stats" setting
  'js.filterWebpackStats'(stats, settings) {
    return stats
  },
  // Filter the Webpack "performance" setting
  'js.filterWebpackPerformance'(performance, settings) {
    return performance
  }
}
