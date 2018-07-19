
const { resolve } = require('path')

module.exports = function nuxtVueDaumPostcode() {
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'bootstrap-vue.js',
  })
}

module.exports.meta = require('../package.json')
