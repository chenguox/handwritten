module.exports = {
  // plugins: [
  //   "@babel/plugin-transform-block-scoping",
  //   "@babel/plugin-transform-arrow-functions"
  // ]
  presets: [
    ["@babel/preset-env", {
      // 在开发中针对babel的浏览器兼容查询使用browserslist工具, 而不是设置 target
      // 因为 browserslist 工具, 可以在多个前端工具之间进行共享浏览器兼容性(postcss/babel)
      // targets: ">5%"

      // 添加 polyfill
      // 设置corejs的版本
      // corejs: 3,
      // 设置以什么样的方式来使用 polyfill
      // false : 不使用, 此时不需要设置 corejs
      // usage: 根据源代码中出现的语言特性, 自动检测所需要的 polyfill
      // entry: 在入口文件添加, 会根据 browserslist 目标导入所有的 polyfill
      // useBuiltIns: "usage" 
    }],
    ["@babel/preset-react"]
  ]
}