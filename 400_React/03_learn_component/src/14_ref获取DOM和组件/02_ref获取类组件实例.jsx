import React, { PureComponent, createRef } from 'react'

class Home extends PureComponent {
  test() {
    console.log("test------");
  }

  render() {
    return (
      <div>Home:Hello World</div>
    )
  }
}

export class App extends PureComponent {
  constructor() {
    super()

    this.myRef = createRef()
  }

  getComponent() {
    // 通过 this.myRef.current 获取
    console.log(this.myRef.current);
    this.myRef.current.test()
  }

  render() {
    return (
      <div>
        <Home ref={this.myRef}/>
        <button onClick={e => this.getComponent()}>获取组件实例</button>
      </div>
    )
  }
}

export default App