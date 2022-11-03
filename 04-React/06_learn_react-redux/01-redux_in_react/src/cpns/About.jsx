import React, { PureComponent } from 'react'
import store from '../store'
import { addNumberAction, subNumberAction } from '../store/actionCreators'

export class About extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      console.log(store.getState());
      this.setState({
        counter: store.getState().counter
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  addNumber(num) {
    store.dispatch(addNumberAction(num))
  }

  subNumber(num) {
   store.dispatch(subNumberAction(num))
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>Home-Counter: { counter }</h2>
        <button onClick={ e => { this.addNumber(1) }}>加1</button>
        <button onClick={ e => { this.subNumber(1) }}>减1</button>
      </div>
    )
  }
}

export default About