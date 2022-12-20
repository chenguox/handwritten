const path = require("path")

module.exports = {
  // 入口没设置, 默认是 src/index.js
  // 出口没设置, 默认是 dist/main.js
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
}