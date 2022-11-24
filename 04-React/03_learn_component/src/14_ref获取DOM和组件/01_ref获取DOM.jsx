import React, { PureComponent, createRef } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {}

    this.titleRef = createRef()
    this.titleEl = null
  }

  // 获取原生DOM的三种方式
  getNativeDOM() {
    // 方式一： 在 React 元素上绑定一个 ref 字符串
    console.log(this.refs.cgx);

    // 方式二： 提前创建好 ref 对象，createRef(), 将创建出来的对象绑定到元素
    console.log(this.titleRef.current)

    // 方式三： 传入一个回调函数，在对应的元素被渲染之后，回调函数被执行，并将元素传入
    console.log(this.titleEl)
  }

  render() {
    return (
      <div>
        <div>App</div>
        {/* 1. 字符串 */}
        <h4 ref="cgx">Hello World</h4>

        {/* 2. createRef 创建对象 */}
        <h4 ref={this.titleRef}>你好啊，李银河</h4>

        {/* 3. 回调函数 */}
        <h4 ref={el => this.titleEl = el}>你好啊，师姐</h4>

        <button onClick={e => this.getNativeDOM()}>获取DOM</button>
      </div>
    )
  }
}

export default App