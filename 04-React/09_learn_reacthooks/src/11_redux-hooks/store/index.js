import { configureStore } from '@reduxjs/toolkit'
import counteReducer from './modules/counter'

const store = configureStore({
  reducer: {
    counterModule: counteReducer
  }
})

export default store