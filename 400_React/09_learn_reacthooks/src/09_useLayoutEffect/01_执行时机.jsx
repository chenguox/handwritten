import React, { memo, useState, useEffect, useLayoutEffect } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect');
  })

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  })

  console.log("App render")

  // 执行顺序：
  // App render
  // useLayoutEffect
  // useEffect

  return (
    <div>
      <h2>计数器: {count}</h2>
      <button onClick={e => setCount(count+1)}>加1</button>
    </div>
  )
})

export default App