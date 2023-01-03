import React, { PureComponent } from 'react'
import Cart from './pages/Cart'

export class App extends PureComponent {
  // constructor() {
  //   super()

  //   // this.state = {
  //   //   isLogin: false
  //   // }
  // }

  loginClick() {
    localStorage.setItem("token", "codercgx")

    // this.setState({ isLogin: true })
    
    // 实现强制刷新
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        <h4>App</h4>
        <Cart />
        <button onClick={e => this.loginClick()}>点击登录</button>
      </div>
    )
  }
}

export default App