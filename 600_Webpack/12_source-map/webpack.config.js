const path = require('path')

module.exports = {
  mode: 'development',
  // 常见的值:
  // 1. false
  // 2. none => production
  // 3. eval => development
  // 4. source-map => production

  // 不常见的值
  // 1. eval-source-map: 添加到eval函数的后面
  // 2. inline-source-map: 添加到文件的后面
  // 3. cheap-source-map(dev环境): 低开销, 更加高效 
  // 4. cheap-module-source-map: 和 cheap-source-map 比如相似, 但是对来自loader的source-map处理的更好
  // 5. hidden-source-map: 会生成 sourcemap 文件, 但是不会对 source-map 文件进行引用, 要引用自己添加对应的注释代码
  // 6. nosources-source-map: 生成的sourcemap只有错误信息的提示, 不会生成源代码文件
  devtool: 'nosources-source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}