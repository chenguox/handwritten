import { useState, useEffect } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  
  useEffect(() => {
    // 当前传入的回调函数会在组件被渲染完成后, 自动执行
    // 网络请求/DOM操作(修改标题)/事件监听
    document.title = counter
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
