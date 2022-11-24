import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "Hello World",
      counter: 0
    }
  }

  changeText() {
    this.setState({
      message: "你好啊, 李银河"
    })
    // 会先打印 Hello World，证明 setState 是异步的
    console.log(this.state.message)
  }

  increment() {
    // 会合并只执行一次 render, counter 也只会加 1
    this.setState({
      counter: this.state.counter + 1
    })
    this.setState({
      counter: this.state.counter + 1
    })
    this.setState({
      counter: this.state.counter + 1
    })
  }

  increment2() {
    // 执行一次 render
    this.setState((state) => {
      return {
        counter: state.counter + 1
      }
    })
    this.setState((state) => {
      return {
        counter: state.counter + 1
      }
    })
    this.setState((state) => {
      return {
        counter: state.counter + 1
      }
    })
  }

  render() {
    const { message, counter } = this.state
    console.log("render被执行")

    return (
      <div>
        <div>App</div>
        <div>message: {message}</div>
        <button onClick={e => this.changeText()}>修改文本</button>

        <div>当前计数：{ counter }</div>
        <button onClick={e => this.increment()}>加1</button>

        <button onClick={e => this.increment2()}>加1</button>
      </div>
    )
  }
}

export default App