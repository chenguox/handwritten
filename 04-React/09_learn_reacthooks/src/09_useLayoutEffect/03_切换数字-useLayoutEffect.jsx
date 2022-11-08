import React, { memo, useState, useEffect, useLayoutEffect } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(100000)

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    if(count === 0) {
      setCount(Math.random() + 99)
    }
  }, [count])


  return (
    <div>
      <h2>计数器: {count}</h2>
      <button onClick={e => setCount(0)}>设置为0</button>
    </div>
  )
})

export default App