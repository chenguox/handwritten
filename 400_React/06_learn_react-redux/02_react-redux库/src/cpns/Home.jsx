import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { addNumberAction, subNumberAction } from '../store/actionCreators'

export class Home extends PureComponent {
  addNumber(num) {
    this.props.addNumber(num)
  }

  subNumber(num) {
    this.props.subNumber(num)
  }

  render() {
    const { counter } = this.props

    return (
      <div>
        <h2>Home-Counter: { counter }</h2>
        <button onClick={ e => { this.addNumber(1) }}>加1</button>
        <button onClick={ e => { this.subNumber(1) }}>减1</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  addNumber: function(num) {
    dispatch(addNumberAction(num))
  },
  subNumber: function(num) {
    dispatch(subNumberAction(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)