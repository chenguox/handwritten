import React, { PureComponent } from 'react'

import About from './page/About'
import Home from './page/Home'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h4>App</h4>
        {/* 类组件 */}
        <About />
        {/* 函数组件 */}
        <Home />
      </div>
    )
  }
}

export default App