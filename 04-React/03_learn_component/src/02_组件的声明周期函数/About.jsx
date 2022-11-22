import React, { Component } from 'react'

export class About extends Component {
  // 1. 构造方法 constructor
  constructor() {
    console.log("About constructor");
    super()

    this.state = {
      message: "Hello World"
    }
  }

  changeText() {
    this.setState({
      message: "你好啊，李银河"
    })
  }

  // 2. 执行 render 函数
  render() {
    console.log("About render")
    const { message } = this.state

    return (
      <div>
        <h2>About: {message}</h2>
        <button onClick={e => this.changeText()}>修改文本</button>
      </div>
    )
  }

  // 3. 组件被渲染到DOM: 被挂载到 DOM
  componentDidMount() {
    console.log("About componentDidMount")
  }

  // 4. 组件的DOM被更新完成： DOM发送更新
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("About componentDidUpdate:", prevProps, prevState, snapshot)
  }

  // 5. 组件从 DOM 中卸载掉：从 DOM 移除掉
  componentWillUnmount() {
    console.log("About componentWillUnmount");
  }

  // 不常用的声明周期补充
  // shouldComponentUpdate() {
  //   return true
  // }

  // getSnapshotBeforeUpdate() {
  //   console.log("getSnapshotBeforeUpdate")
  //   return {
  //     scrollPosition: 1000
  //   }
  // }
}

export default About