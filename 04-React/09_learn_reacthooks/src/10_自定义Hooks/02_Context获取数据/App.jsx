import React, { memo } from 'react'
import { useUserToken } from '../hooks'

const App = memo(() => {
  // 就可以在任意组件直接获取 user 和 token
  const [user, token] = useUserToken()

  return (
    <div>
      <h2>App</h2>
      <div>User: {user.name}</div>
      <div>Token: {token}</div>
    </div>
  )
})

export default App