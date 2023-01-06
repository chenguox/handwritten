const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    // 重新打包时, 先将之前打包的文件夹删除掉
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.json', '.wasm', '.jsx', '.ts'],
  },
  module: {
    rules: [
      {
        // 针对jsx?代码进行babel处理
        test: /\.jsx?$/, // x?: 0或者1个x
        // 排除掉 node_modules
        // exclude: /node_modules/,
        use: 'babel-loader',
        // use: {
        //   loader: 'babel-loader',
        //   // 1. 方式一: 配置使用什么插件
        //   // options: {
        //   //   plugins: [
        //   //     "@babel/plugin-transform-block-scoping",
        //   //     "@babel/plugin-transform-arrow-functions"
        //   //   ]
        //   // }
        //   // 2. 方式二: 配置使用预设
        //   // options: {
        //   //   // 数组的好处, 可以配置添加 targets 设置目标浏览器
        //   //   presets: ["@babel/preset-env", {
        //   //     targets: "last 2 version"
        //   //   }]
        //   // }
        //   //3. 方式三: 配置在 babel.config.js
        // }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
}
