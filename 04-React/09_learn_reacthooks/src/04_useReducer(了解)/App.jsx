import React, { memo, useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'add_number':
      return { ...state, counter: state.counter + action.num}
    default:
      return state
  }
}

const App = memo(() => {
  const [state, dispatch] = useReducer(reducer, {counter: 0})

  return (
    <div>
      <h2>App: {state.counter}</h2>
      <button onClick={e => dispatch({type: 'add_number', num: 1})}>+1</button>
    </div>
  )
})

export default App