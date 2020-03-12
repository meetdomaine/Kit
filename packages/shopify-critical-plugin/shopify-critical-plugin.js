const path = require('path')
const critical = require('critical')
const fs = require('../webpacker/node_modules/fs-extra')
const util = require('util')

function writeToLogFile (json) {
  fs.outputFileSync(`${__dirname}/critical.kit.log`, json)
}

class HtmlCriticalWebpackPlugin {

  constructor(options) {
    this.options = options;
  }

  emit(compilation, callback) {
    const css = Object.keys(compilation.assets)
      .filter(function (filename) { return /\.css$/.test(filename); })
      .map(function (filename) { return path.join(compilation.outputOptions.path, filename); });


    writeToLogFile(compilation.assets)
    process.exit()

    critical.generate(Object.assign({ css }, this.options), (err) => {
      callback(err);
    });
  }

  apply(compiler) {
    compiler.hooks.make.tapAsync('ShopifyCriticalCSSPlugin', (compilation, callback) => {
      writeToLogFile(util.inspect(compilation, true, 10))
      process.exit()
    })
    return
    compiler.hooks.compilation.tap('ShopifyCriticalCSSPlugin', (compilation) => {
      var options = {}
      compilation.hooks.optimizeChunkAssets.tapAsync('ShopifyCriticalCSSPlugin', (chunks, callback) => {
        chunks.reduce(function (acc, chunk) {
          return acc.concat(chunk.files || []);
        }, []).concat(compilation.additionalChunkAssets || []).forEach(function (file) {
            var asset = compilation.assets[file];

            if (asset.__babelminified) {
              compilation.assets[file] = asset.__babelminified;
              return;
            }

            var input = void 0;
            var inputSourceMap = void 0;

            if (options.sourceMap) {
              if (asset.sourceAndMap) {
                var sourceAndMap = asset.sourceAndMap();
                inputSourceMap = sourceAndMap.map;
                input = sourceAndMap.source;
              } else {
                inputSourceMap = asset.map();
                input = asset.source();
              }
            } else {
              input = asset.source();
            }

            console.log(input)
            process.exit()

            // do the transformation
            var result = options.babel.transform(input, {
              parserOpts: options.parserOpts,
              presets: [[options.minifyPreset, options.minifyOpts]],
              sourceMaps: options.sourceMap,
              babelrc: false,
              inputSourceMap,
              shouldPrintComment(contents) {
                return shouldPrintComment(contents, options.comments);
              }
            });

            asset.__babelminified = compilation.assets[file] = result.map ? new _webpackSources.SourceMapSource(result.code, file, result.map, input, inputSourceMap) : new _webpackSources.RawSource(result.code);
        });
        // console.log(chunks)
        // // writeToLogFile(chunks)
        // process.exit()
        // this.emit(compilation, callback);
      });
    })
  }
}

module.exports = HtmlCriticalWebpackPlugin;