import { useState, useEffect } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  
  // 1、修改 title 
  useEffect(() => {
    document.title = counter
  })

  // 2、监听 redux 的变化
  useEffect(() => {
    console.log('监听 redux 的变化');

    return () => {
      console.log('取消 redux 的变化')
    }
  })

  // 3、监听 eventBus 中的 cgx 事件
  useEffect(() => {
    console.log('监听 eventBus 的事件');

    return () => {
      // 取消eventBus中的why事件监听
    }
  })

  return (
    <div className="App">
      <h2>计数器： {counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+</button>
      <button onClick={(e) => setCounter(counter - 1)}>1</button>
    </div>
  )
}

export default App
