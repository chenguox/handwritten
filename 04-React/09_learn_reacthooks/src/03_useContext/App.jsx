import React, { memo, useContext } from 'react'
import { UserContext, ThemeContext } from './context'


const App = memo(() => {
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)
  
  return (
    <div>
      <h2>App-name: {user.name} - age: {user.age}</h2>
      <span style={{color: theme.color, fontSize: theme.size + 'px'}}>Theme</span>
    </div>
  )
})

export default App