import React, { Component } from 'react'

export class NavBarTwo extends Component {
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props

    return (
      <div>
        <div>NavBarTwo</div>
        <div className="nav-bar">
          <div className="left">{leftSlot}</div>
          <div className="center">{centerSlot}</div>
          <div className="right">{rightSlot}</div>
        </div>
      </div>
    )
  }
}

export default NavBarTwo