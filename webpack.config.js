module.exports = {
  mode: "production",
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname +  "/dist",
    filename: "index.js",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    vue: "vue",
  },
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.esm.js",
    },
  },
  devtool: "#source-map",
}
