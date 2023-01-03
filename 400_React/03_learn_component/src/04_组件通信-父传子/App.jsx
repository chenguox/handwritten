import React, { Component } from 'react'

import Header from './c-cpns/Header'
import Main from './c-cpns/Main'
import Footer from './c-cpns/Footer'

export class App extends Component {
  render() {
    return (
      <div>
        <div>App</div>
        <Header />
        <hr />
        <Main />
        <hr />
        <Footer />
      </div>
    )
  }
}

export default App