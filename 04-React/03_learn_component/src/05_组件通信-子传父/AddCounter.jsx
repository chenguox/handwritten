import React, { Component } from 'react'
// import PropTypes from "prop-types"

export class AddCounter extends Component {
  addCount(count) {
    this.props.addClick(count)
  }

  render() {
    return (
      <div>
        <div>AddCounter</div>
        <button onClick={() => this.addCount(1)}>加1</button>
        <button onClick={() => this.addCount(5)}>加5</button>
        <button onClick={() => this.addCount(10)}>加10</button>
      </div>
    )
  }
}

// AddCounter.propTypes = {
//   addClick: PropTypes.func
// }

export default AddCounter