const { createStore } = require('redux')

const defaultState = {
  name: 'aaa'
}

function reducer(state = defaultState, action) {
  if(action.type === 'change_name') {
    return { ...state, name: action.newName}
  }
  return state
}

const store = createStore(reducer)

const unsubscribe = store.subscribe(() => {
  console.log('订阅数据发生了变化：', store.getState())
})


console.log('初始化数据：', store.getState())
store.dispatch({
  type: 'change_name',
  newName: 'bbb'
})

store.dispatch({
  type: 'change_name',
  newName: 'ccc'
})

// 取消订阅
unsubscribe()

store.dispatch({
  type: 'change_name',
  newName: 'ddd'
})
