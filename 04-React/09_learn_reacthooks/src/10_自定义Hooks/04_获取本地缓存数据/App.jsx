import React, { memo } from 'react'
import { useLocalStorage } from '../hooks'

const App = memo(() => {
  const [token, setToken] = useLocalStorage('token')
  function setTokenHandle() {
    setToken('james')
  }

  const [avatarUrl, setAvatarUrl] = useLocalStorage('avatarUrl')
  function setAvatarUrlHandle() {
    setAvatarUrl("http://www.james.com/cba.png")
  }

  return (
    <div>
      <h2>App: token:{token} - avatarUrl:{avatarUrl}</h2>
      <button onClick={setTokenHandle}>设置token</button>
      <button onClick={setAvatarUrlHandle}>设置头像</button>
    </div>
  )
})

export default App