
const webpack = require("webpack")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          scss: "vue-style-loader!css-loader!sass-loader",
          sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax",
          loaders: {
            js: {
               loader: "babel-loader",
               options: {
                   presets: ["es2015-ie"],
               }
            },
          }
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015-ie"],  
        },
      },
    ],
  },
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.esm.js",
    },
  },
  devtool: "#source-map",
}

if (process.env.NODE_ENV === "production") {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "\"production\"",
      },
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        ie8: true,
        ecma: 5,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ])
}
