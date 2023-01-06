import React, { memo, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>App Count: {count}</h3>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
    </div>
  )
})

export default App
