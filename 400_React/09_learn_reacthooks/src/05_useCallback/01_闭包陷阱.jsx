import React, { memo, useState, useCallback, useRef } from 'react'


const App = memo(() => {
  const [count, setCount] = useState(0)
  
  // 普通的函数
  // const increment = () => {
  //   setCount(count+1)
  // }

  // 闭包陷阱(如果传入的是空数组，count 永远保留第一次初始的值为0，所以必须传入count)
  // const increment = useCallback(function foo(){
  //   console.log('increment');
  //   setCount(count+1)
  // },[count])

  // 第二种方式，使用 useRef 解决闭包陷阱
  const countRef = useRef()
  countRef.current = count
  const increment = useCallback(() => {
    console.log('increment');
    setCount(countRef.current + 1)
  },[])

  return (
    <div>
      <h2>APP: {count}</h2>
      <button onClick={increment}>加1</button>
    </div>
  )
})

export default App