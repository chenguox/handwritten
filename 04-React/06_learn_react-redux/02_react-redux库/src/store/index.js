import { createStore } from 'redux'
import reducer from './reducer'

// 3. 使用 createStore 函数创建 store
const store = createStore(reducer)

export default store