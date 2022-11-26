import React, { PureComponent, StrictMode } from 'react'
import Home from './c-cpns/Home'
import Profile from './c-cpns/Profile'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home />
        </StrictMode>
        <Profile />
      </div>
    )
  }
}

export default App