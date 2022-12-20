const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin } = require("webpack")

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
    clean: true
  },
  resolve: {
    extensions: [".js", ".json", ".vue", ".jsx", ".ts", ".tsx"],
    alias: {
      utils: path.resolve(__dirname, "../src/utils")
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 60 * 1024
          }
        },
        generator: {
          filename: "img/[name]_[hash:8][ext]"
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "电商项目",
      template: "./index.html"
    }),
    new DefinePlugin({
      BASE_URL: "'./'"
    })
  ]
}