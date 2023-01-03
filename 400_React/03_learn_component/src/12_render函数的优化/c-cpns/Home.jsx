import React, { Component, PureComponent } from 'react'

export class Home extends Component {
  shouldComponentUpdate(newProps, nextState) {
    // 自己对比state是否发生改变: this.state和nextState
    if (this.props.message !== newProps.message) {
      return true
    }
    return false
  }

  render() {
    console.log("Home render");

    return (
      <div>Home:{this.props.message}</div>
    )
  }
}

export default Home