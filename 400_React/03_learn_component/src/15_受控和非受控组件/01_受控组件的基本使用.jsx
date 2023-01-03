import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      username: 'codercgx'
    }
  }

  inputChange(event) {
    console.log("inputChange:", event.target.value)
    this.setState({ username: event.target.value })
  }

  render() {
    const { username } = this.state

    return (
      <div className="app">
        <div>受控组件</div>
        <input type="text" value={username} onChange={e => this.inputChange(e)} />

        <div>非受控组件</div>
        {/* 获取 dom 进行操作 */}
        <input type="text" />
        {/* <h2>username: {username}</h2> */}
      </div>
    )
  }
}

export default App