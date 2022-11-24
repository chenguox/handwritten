import React, { Component } from 'react'
import { flushSync } from 'react-dom'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "Hello World",
    }
  }

  changeText() {
    // 在react18之前, setTimeout中setState操作, 是同步操作
    // 在react18之后, setTimeout中setState异步操作(批处理)
    setTimeout(() => {
      this.setState({
        message: "你好啊, 李银河"
      })
      console.log(this.state.message)
    }, 0)
  }

  changeText2() {
    setTimeout(() => {
      // 使用 flushSync 将 setState 变成同步的
      flushSync(() => {
        this.setState({ message: "你好啊, 李银河2"})
      })
      console.log(this.state.message)
    }, 0)
  }


  render() {
    const { message } = this.state
    console.log("render被执行")

    return (
      <div>
        <div>App</div>
        <div>message: {message}</div>
        <button onClick={e => this.changeText()}>修改文本</button>
        <button onClick={e => this.changeText2()}>修改文本2</button>
      </div>
    )
  }
}

export default App