import { createStore, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk'

import reducer from './reducer'

// redux-dispatch
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// createStore 接收第二个参数，接收一个 enhancer 中间件
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store