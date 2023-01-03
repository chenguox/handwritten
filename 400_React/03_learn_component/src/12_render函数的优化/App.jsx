import React, { Component, PureComponent } from 'react'
import About from './c-cpns/About'
import Home from './c-cpns/Home'
import Recommend from './c-cpns/Recommend'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      message: "Hello World",
      counter: 0
    }
  }
  
  shouldComponentUpdate(nextProps, newState) {
    // App 进行性能优化的点
    if(this.state.message !== newState.message || this.state.counter !== newState.counter) {
      return true
    }

    return false
  }

  changeText() {
    this.setState({ message: "你好啊, 李银河！"})
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    const { message, counter } = this.state

    return (
      <div>
        <div>App-{message}-{counter}</div>
        <button onClick={e => this.changeText()}>修改文本</button>
        <button onClick={e => this.increment()}>counter+1</button>

        <Home message={message} />
        <About message={message} />
        <Recommend counter={counter} />
      </div>
    )
  }
}

export default App