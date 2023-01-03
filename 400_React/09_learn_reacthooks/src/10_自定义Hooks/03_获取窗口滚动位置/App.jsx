import React, { memo } from 'react'
import { useScrollPosition } from '../hooks'

const App = memo(() => {
  const [scrollX, scrollY] = useScrollPosition()

  return (
    <div style={{ height: '1000px'}}>App: {scrollX + '-' + scrollY}</div>
  )
})

export default App