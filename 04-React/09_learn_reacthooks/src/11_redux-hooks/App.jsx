import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNumberAction, subNumberAction } from './store/modules/counter'

const App = memo(() => {
  // 1.使用useSelector将redux中store的数据映射到组件内
  const { count } = useSelector((state) => ({
    count: state.counterModule.count
  }))

  // 2.使用dispatch直接派发action
  const dispatch = useDispatch()
  function addNumberHandle(num, isAdd = true) {
    if(isAdd) {
      dispatch(addNumberAction(num))
    } else {
      dispatch(subNumberAction(num))
    }
  }

  return (
    <div>
      <h2>App: { count }</h2>
      <button onClick={ e => addNumberHandle(1)}>+1</button>
      <button onClick={ e => addNumberHandle(6)}>+6</button>
      <button onClick={ e => addNumberHandle(6, false)}>-6</button>
    </div>
  )
})

export default App