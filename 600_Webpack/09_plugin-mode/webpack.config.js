const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin } = require("webpack")

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 没有指定 index.html, 就会使用默认的
    new HtmlWebpackPlugin({
      title: "电商项目",
      template: "./index.html"
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      name: "'codercgx'",
      age: "18"
    })
  ]
}