
// ref. https://github.com/bootstrap-vue/bootstrap-vue/blob/dev/nuxt/index.js

const path = require('path')

module.exports = function nuxtVueDaumPostcode(options) {
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.template.js'),
    fileName: 'vue-daum-postcode.js',
    options,
    ssr: false,
  })
}

module.exports.meta = require('../package.json')
