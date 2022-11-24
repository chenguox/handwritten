import React, { PureComponent, createRef, forwardRef } from 'react'

const Home = forwardRef(function(props, ref) {
  return (
    <div>
      <h4 ref={ref}>Home: Hello World</h4>
    </div>
  )
})

export class App extends PureComponent {
  constructor() {
    super()

    this.myRef = createRef()
  }

  getComponent() {
    console.log(this.myRef.current)
  }

  render() {
    return (
      <div>
        <div>App</div>
        <Home ref={this.myRef} />
        <button onClick={e => this.getComponent()}>获取组件实例</button>
      </div>
    )
  }
}

export default App