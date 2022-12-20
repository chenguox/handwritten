const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  devServer: {
    // 开启 HMR (模块热替换)
    hot: true,
    host: "0.0.0.0",
    // 设置监听的端口, 默认情况下是 8080
    port: 8888,
    // 是否为静态文件开启 gizp compression
    compress: true,
    // 是否打开浏览器
    open: true, 
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}