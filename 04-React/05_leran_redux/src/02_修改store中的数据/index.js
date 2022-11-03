const { createStore } = require('redux')

const defaultState = {
  one: '111',
  two: 'aaa'
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'CHANGE_ONE':
      return { ...state, one: action.value }
    case 'CHANGE_TWO':
      return { ...state, two: action.value }
    default:
      return state
  }
}

const store = createStore(reducer)

console.log(store.getState())

// 通过 dispatch 修改 store 中的数据
store.dispatch({
  type: 'CHANGE_ONE',
  value: '222'
})
store.dispatch({
  type: 'CHANGE_TWO',
  value: 'bbb'
})

console.log(store.getState())
