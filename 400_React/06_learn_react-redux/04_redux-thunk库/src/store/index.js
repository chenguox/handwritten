import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer'

const middleware = applyMiddleware(thunk)

// createStore 接收第二个参数，接收一个中间件
const store = createStore(reducer, middleware)

export default store