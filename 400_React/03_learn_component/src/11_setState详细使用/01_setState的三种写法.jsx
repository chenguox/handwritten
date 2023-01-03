import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "Hello World",
      counter: 0
    }
  }

  changeText1() {
    // 1. setState 的基本使用
    this.setState({
      message: '你好啊，李银河1'
    })
  }

  changeText2() {
    // 2. setState 接收一个回调函数 
    // 好处一： 可以在回调函数中编写新的 state 的逻辑
    // 好处二： 当前的回调函数会将之前的 state 的 props 传递进来

    this.setState((state, props) => {
      // 1. 编写一些对新的 state 的处理逻辑
      // 2. 可以获取之前的 state 和 props 值
      console.log(state, props)
      console.log(this.state.message, this.props)

      return {
        message: "你好啊, 李银河2"
      }
    })
  }

  changeText3() {
    // setState 在 React 的事件处理中是一个异步调用
    this.setState({
      message: "你好啊, 李银河3"
    })
    console.log('setState 是异步调用:', this.state.message)
  }

  changeText4() {
    // 3. 如果希望在数据更新之后（数据合并），获取到对应的结果执行一些逻辑代码，可以在 setState 中传入第二个参数：callback
    this.setState({
      message: "你好啊, 李银河3"
    }, () => {
      console.log('setState 更新完执行', this.state.message)
    })
    console.log('setState 是异步调用:', this.state.message)
  }

  render() {
    const { message } = this.state

    return (
      <div>
        <div>App: {message}</div>
        <button onClick={ e => this.changeText1()}>修改文本1</button>
        <button onClick={ e => this.changeText2()}>修改文本2</button>
        <button onClick={ e => this.changeText3()}>修改文本3</button>
        <button onClick={ e => this.changeText4()}>修改文本4</button>
      </div>
    )
  }
}

export default App