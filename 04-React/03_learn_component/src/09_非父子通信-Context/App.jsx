import React, { Component } from 'react'

import Home from './c-cpns/Home'
import About from './c-cpns/About'

import ThemeContext from './context/theme-context'
import UserContext from './context/user-context'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      info: {
        name: 'kobe',
        age: 18
      }
    }
  }

  render() {
    const { info } = this.state

    return (
      <div className="app">
        <div>App</div>

        {/* 第二步：通过 ThemeContext 中 Provider 中 value 属性为后代提供数据 */}
        <UserContext.Provider value={{name: 'cgx',height: 1.88}}>
          <ThemeContext.Provider value={{color: "red", size: "30"}}>
            <Home />
          </ThemeContext.Provider>
        </UserContext.Provider>


        {/* 给 About 传递数据 */}
        <About name="cgx" age={18} />
        <About name={info.name} age={info.age} />
        {/* 简便写法 */}
        <About {...info} />
      </div>
    )
  }
}

export default App