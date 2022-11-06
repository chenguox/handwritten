import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className="App">
      <h2>计数器： {counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+</button>
      <button onClick={(e) => setCounter(counter - 1)}>1</button>
    </div>
  )
}

export default App
