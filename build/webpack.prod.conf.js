
var path = require('path')
var merge = require('webpack-merge');

var baseConfig = require('./webpack.base.conf');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(baseConfig, {
  entry: resolve('src/index.js'),
  output: {
    path: resolve('dist'),
    filename: 'index.js',
    library: 'VueDaumPostcode',
    libraryTarget: 'umd'
  },
});
