import React, { memo, useState } from 'react'
import { useLogLife } from '../hooks'

const Home = memo(() => {
  useLogLife('Home')

  return (
    <div>Home</div>
  )
})

const About = memo(() => {
  useLogLife('About')

  return (
    <div>About</div>
  )
})

const App = memo(() => {
  const [isShow, setIsShow] = useState(true)

  return (
    <div>
      <h2>App</h2>
      <button onClick={ e => setIsShow(!isShow) }>切换</button>

      { isShow && <Home /> }
      { isShow && <About/> }
    </div>
  )
})

export default App