module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        // 1. 打包成单独的文件并导出 URL
        // 缺点: 多图片
        // type: "asset/resource"
        // 2. 打包成 base64 的编码, 编码后的源码会放到 js 文件中
        // type: "asset/inline"
        // 3. 在 base64 和 单独文件 选择
        // 合理的规范
        // 3.1 对于小一点的图片, 可以进行 base64 编码
        // 3.2 对于大一点的图片, 单独的图片打包, 形成 url 地址, 单独的请求这个 url 图片
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 60 * 1024
          }
        },
        // 对图片配置命名规则
        generator: {
          // 占位符
          // name: 指向原来的图片名称
          // ext: 扩展名
          // hash: webpack 生成的 hash
          filename: "img/[name]_[hash:8][ext]"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
}