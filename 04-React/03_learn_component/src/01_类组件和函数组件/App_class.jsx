import React, { Component } from 'react'

export default class App_class extends Component {
  constructor() {
    super()

    this.state = {
      message: 'App Component'
    }
  }

  render() {
    const { message } = this.state

    // 返回的内容
    // 1. react 元素：通过jsx编写的代码就会被编译成
    // React.createElement()
    // return <div>{message}</div>

    // 2. 组件或者fragments(后续学习)
    // return ['aaa','bbb','ccc']
    // return [
    //   <h1>h1元素</h1>,
    //   <h2>h2元素</h2>,
    //   <div>哈哈哈</div>
    // ]

    // 3. 字符串/数字类型
    // return "Hello 类组件"
    // return 123
    return true // 什么都不显示
  }
}
