import { createSlice } from '@reduxjs/toolkit'

const counteSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    addNumberAction(state, { payload }) {
      state.count = state.count + payload
    },
    subNumberAction(state, { payload }) {
      state.count = state.count - payload
    }
  }
})

export const { addNumberAction, subNumberAction } = counteSlice.actions
export default counteSlice.reducer