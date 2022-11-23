import React, { Component } from 'react'

export class About extends Component {
  render() {
    const { name, age } = this.props

    return (
      <div>About-name:{name}, age:{age}</div>
    )
  }
}

export default About