
const path = require('path')
const merge = require('webpack-merge');
const webpack = require("webpack")
const baseConfig = require('./webpack.base.conf');
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = [
  merge(baseConfig, {
    mode: "none",
    entry: resolve('src/index.js'),
    output: {
      path: resolve('dist'),
      filename: 'vue-daum-postcode.js',
      globalObject: 'typeof self !== \'undefined\' ? self : this',
      library: 'VueDaumPostcode',
      libraryTarget: 'umd'
    },
  }),
  merge(baseConfig, {
    mode: "production",
    entry: resolve('src/index.js'),
    output: {
      path: resolve('dist'),
      filename: 'vue-daum-postcode.min.js',
      globalObject: 'typeof self !== \'undefined\' ? self : this',
      library: 'VueDaumPostcode',
      libraryTarget: 'umd'
    },
  }),
]

module.exports[1].plugins = (module.exports[1].plugins || []).concat([
  new UglifyJSPlugin({
    sourceMap: true,
    uglifyOptions: {
      ie8: true,
      ecma: 5,
    },
  }),
  // new webpack.LoaderOptionsPlugin({
  //   minimize: true,
  // }),
])
