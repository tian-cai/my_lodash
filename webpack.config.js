const path = require('path');
const cleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: __dirname+"/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "my_lodash.js",
    libraryTarget: "umd",
    library: "my_lodash"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        include: path.resolve(__dirname,"src")
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin("dist/*")
  ]
}