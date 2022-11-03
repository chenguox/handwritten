import * as actionType from './constants'

// 1、初始化数据
const defaultState = {
  counter: 0
}

// 2. 创建一个 reducer 并导出
function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    case actionType.SUB_NUMBER:
      return { ...state, counter: state.counter - action.num }
    default:
      return state
  }
}

export default reducer