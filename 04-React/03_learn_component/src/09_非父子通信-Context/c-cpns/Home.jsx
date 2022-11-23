import React, { Component } from 'react'

import HomeBanner from './HomeBanner'
import HomeInfo from './HomeInfo'

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <div>Home</div>
        <HomeInfo />
        <HomeBanner />
      </div>
    )
  }
}

export default Home