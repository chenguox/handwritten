import React, { Component } from 'react'

import About from './About'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      isShow: true
    }
  }

  switchAbout() {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  render() {
    const { isShow } = this.state

    return (
      <div>
        <h2>App</h2>
        <button onClick={e => this.switchAbout() }>切换</button>
        { isShow && <About />}
      </div>
    )
  }
}

export default App