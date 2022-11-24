import React, { Component } from 'react'
import eventBus from '../util/event-bus'

export class HomeBanner extends Component {
  prevClick() {
    eventBus.emit("bannerPrev", 'cgx', 18, 1.88)
  }

  nextClick() {
    eventBus.emit('bannerNext', {nickname: "kobe", level: 99})
  }

  render() {
    return (
      <div>
        <div>HomeBanner</div>
        <button onClick={e => this.prevClick()}>上一个</button>
        <button onClick={e => this.nextClick()}>下一个</button>
      </div>
    )
  }
}

export default HomeBanner