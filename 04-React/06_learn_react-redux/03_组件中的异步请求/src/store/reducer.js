import * as actionType from './constants'

// 1、初始化数据
const defaultState = {
  banners: [],
  recommends: []
}

// 2. 创建一个 reducer 并导出
function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_BANNER:
      return { ...state, banners: action.banners }
    case actionType.CHANGE_RECOMMEND:
      return { ...state, recommends: action.recommends }
    default:
      return state
  }
}

export default reducer