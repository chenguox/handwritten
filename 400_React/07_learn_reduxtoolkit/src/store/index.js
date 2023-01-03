// 1. 导入 configureStore 函数
import { configureStore } from '@reduxjs/toolkit'

// 2. 导入要处理的 reducer
import counterReducer from './features/counter'
import homeReducer from './features/home'

// 3. 创建 store 对象
const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer
  }
})

// 4. 导出 store 对象
export default store
