import React, { Component, PureComponent } from 'react'

export class Recommend extends PureComponent {

  // 没有使用 PureComponent 优化，message 更新会导致 counter 重新渲染
  // shouldComponentUpdate(nextProps) {
  //   if (this.props.counter !== nextProps.counter) {
  //     return true
  //   }
  //   return false
  // }

  render() {
    console.log('Recommend render')

    return (
      <div>Recommend: { this.props.counter }</div>
    )
  }
}

export default Recommend