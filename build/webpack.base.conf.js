
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "vue-style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["@babel/preset-env"],  
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.esm.js",
    },
  },
  devtool: "#source-map",
}
