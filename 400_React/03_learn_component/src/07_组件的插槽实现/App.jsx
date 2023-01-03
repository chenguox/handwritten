import React, { Component } from 'react'

import NavBarOne from './tab-bar-children'
import NavBarTwo from './tab-bar-props'

export class App extends Component {
  render() {
    const btn = <button>按钮2</button>

    return (
      <div>
        <div>App</div>

        {/* 1. 使用 children 实现插槽 */}
        <NavBarOne>
          <button>按钮</button>
          <h2>哈哈哈</h2>
          <i>斜体文字</i>
        </NavBarOne>

        {/* 2. 使用 props 实现插槽 */}
        <NavBarTwo 
          leftSlot={btn}
          centerSlot={<h2>呵呵呵</h2>}
          rightSlot={<i>斜体2</i>}
        />
      </div>
    )
  }
}

export default App