import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNumber, subNumber } from '../store/features/counter.js'

export class Counter extends PureComponent {
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
        <h2>Counter: {counter}</h2>
        <button onClick={(e) => this.addNumber(1)}>+</button>
        <button onClick={(e) => this.subNumber(1)}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
})

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num))
  },
  subNumber(num){
    dispatch(subNumber(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
