import React, { Component } from 'react'

import './style.css'

export class NavBarOne extends Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <div>NavBarOne</div>
        <div className="nav-bar">
          <div className="left">{children[0]}</div>
          <div classname="center">{children[1]}</div>
          <div className="right">{children[2]}</div>
        </div>
      </div>
    )
  }
}

export default NavBarOne