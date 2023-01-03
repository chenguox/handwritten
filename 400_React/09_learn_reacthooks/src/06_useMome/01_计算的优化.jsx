// 没有优化的时候
import React, { memo, useState, useMemo } from 'react'

const About = memo((props) => {
  console.log('About 组件被重新渲染', props);

  const { result } = props

  return <div>About: { result }</div>
})

function calcNumTotal(num) {
  console.log('执行 calcNumTotal 计算');
  let total = 0
  for (let i = 0; i <= num; i++) {
    total += i
  }

  return total
}

const App = memo(() => {
  const [count, setCount] = useState(0)

  // 每次 App 重新刷新，都会重新执行计算
  // const result = calcNumTotal(50)
  // 1、使用 useMemo 进行优化，只计算一次
  // const result = useMemo(() => {
  //   return calcNumTotal(50)
  // },[])

  // 2、依赖 count 
  const result = useMemo(() => {
    return calcNumTotal(count * 2)
  }, [count])

  return (
    <div>
      {/* 利用计数器让父组件重新刷新 */}
      <h2>计数器: {count}</h2>
      <button onClick={ e => setCount(count+1)}>加一</button>

      <About result={result} />
    </div>
  )
})

export default App
