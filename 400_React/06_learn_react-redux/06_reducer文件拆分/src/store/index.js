import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from 'redux-thunk'

import counterReducer from './counter'
import homeReducer from './home'

// 对多个 reducer 进行合并
const reducer = combineReducers({
  counter: counterReducer,
  home: homeReducer
})

// redux-dispatch
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// createStore 接收第二个参数，接收一个 enhancer 中间件
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store

// 扩展
// combineReducers 实现原理（了解）
// function reducer(state = {}, action) {
//   // 返回一个对象, store的state
//   return {
//     counter: counterReducer(state.counter, action),
//     home: homeReducer(state.home, action),
//   }
// }