import React, { memo, useState, useCallback } from 'react'

// useCallback性能优化的点:
// 1.当需要将一个函数传递给子组件时, 最好使用useCallback进行优化, 将优化之后的函数, 传递给子组件

// props中的属性发生改变时, 组件本身就会被重新渲染
const GXHome = memo((props) => {
  const { increment } = props
  console.log('Home 组件被渲染')

  return (
    <div>
      <button onClick={increment}>Home+1</button>
    </div>
  )
})

const App = memo(() => {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)

  const increment1 = () => {
    console.log('普通函数');
    setCount(count+1)
  }

  const increment2 = useCallback(() => {
    console.log('useCallback函数');
    setCount(count+1)
  }, [count])

  return (
    <div>
      <h2>APP-count: {count}</h2>
      <h2>APP-number: {number}</h2>
      <button onClick={ e => setNumber(Math.random())}>加1</button>

      <GXHome increment={increment1} />
      <GXHome increment={increment2} />
    </div>
  )
})

export default App