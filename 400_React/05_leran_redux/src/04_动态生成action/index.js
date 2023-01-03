const { createStore } = require('redux')

const defaultState = {
  name: 'aaa'
}

function reducer(state = defaultState, action) {
  if(action.type === 'change_name') {
    return { ...state, name: action.newName}
  }
}

const store = createStore(reducer)

// 动态生成 action 对象
function actionCreator(value) {
  return {
    type: 'change_name',
    newName: value
  }
}

store.subscribe(() => {
  console.log('订阅数据发生了变化：', store.getState())
})

store.dispatch(actionCreator('bbb'))
store.dispatch(actionCreator('ccc'))