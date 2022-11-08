// 没有优化的时候
import React, { memo, useState, useMemo } from 'react'

const About = memo((props) => {
  console.log('About 组件被重新渲染', props);

  const { result } = props

  return <div>About: { result }</div>
})

const App = memo(() => {
  const [count, setCount] = useState(0)
  // 传的是对象每次父组件重新渲染，info 相当于是新的值，会造成子组件重新刷新
  // const info = { name: "cgx", age: 18 }

  // 使用useMemo对子组件渲染进行优化，
  const info = useMemo(() => {
    return { name: "cgx", age: 18 }
  }, [])

  return (
    <div>
      {/* 利用计数器让父组件重新刷新 */}
      <h2>计数器: {count}</h2>
      <button onClick={ e => setCount(count+1)}>加一</button>

      <About info={info} />
    </div>
  )
})

export default App
