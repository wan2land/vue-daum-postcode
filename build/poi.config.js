
const path = require('path')
const pkg = require('../package.json')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  html: {
    title: pkg.title + ' - ' + pkg.description,
    description: pkg.description,
    template: resolve('build/template.html'),
  },
  webpack: function(config) {
    config.resolve.alias[pkg.name] = resolve('src')
    return config
  },
}
