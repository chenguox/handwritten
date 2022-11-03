// 1. 导入 createSlice 函数
import { createSlice } from '@reduxjs/toolkit'

// 2.生成切片reducer（包括action）
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    addNumber(state, { payload }) {
      state.counter = state.counter + payload
    },
    subNumber(state, { payload }) {
      state.counter = state.counter - payload
    },
  },
})

// 3. 导出 action 和 reducer
export const { addNumber, subNumber } = counterSlice.actions
export default counterSlice.reducer
