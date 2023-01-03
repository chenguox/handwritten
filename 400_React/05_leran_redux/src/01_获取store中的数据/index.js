const { createStore } = require('redux')

const defaultState = {
  test1: 0,
  test2: 'bbb'
}

function reducer(state = defaultState, action) {
  return state
}

// 创建一个store对象
const store = createStore(reducer)

// 获取 store 中的数据
console.log(store.getState())
