// import 'core-js/stable'
// import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDom from "react-dom/client"
// 正常默认没有 jsx 后缀, 会报错, 需要配置
import App from "./react/App"

// 1. ES6中const定义常量
const message = "Hello World"
console.log(message)

// 2. ES6中箭头函数
const foo = () => {
  console.log("foo function~")
}
foo()

// 3. 对象的结构
const obj = { name: 'cgx', age: 18 }
const { name, age } = obj
console.log(name, age)

// 4. 使用字符串中includes方法
const nickname = "codercgx"
// String.prototype,includes => String 相关的 polyfill 就会被打包
console.log(nickname.includes('coder'))

// 5. 编写 react 代码
const root = ReactDom.createRoot(document.querySelector("#root"))
root.render(<App />)