import React, { Component } from 'react'
import Home from './c-cpns/Home'

import eventBus from './util/event-bus'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      age: 0,
      height: 0
    }
  }

  componentDidMount() {
    // eventBus.on("bannerPrev", (name, age, height) => {
    //   console.log("app 中监听到 bannerPrev", name, age, height)
    //   this.setState({ name, age, height})
    // })

    eventBus.on('bannerPrev', this.bannerPrevClick, this)
    eventBus.on('bannerNext', this.bannerNextClick, this)
  }

  bannerPrevClick(name, age, height) {
    this.setState({ name, age, height })
  }

  bannerNextClick(info) {
    console.log("app中监听到bannerNext", info)
  }

  componentWillUnmount() {
    eventBus.off("bannerPrev", this.bannerPrevClick)
  }

  render() {
    const { name, age, height } = this.state

    return (
      <div>
        <div>App-{name}-{age}-{height}</div>
        <Home />
      </div>
    )
  }
}

export default App