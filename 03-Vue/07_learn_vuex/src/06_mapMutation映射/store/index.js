import { createStore } from 'vuex'
import { CHANGE_INFO } from './constant'

const store = createStore({
  state: {
    counter: 100,
    message: "Hello Vue"
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    changeMessage(state, payload) {
      state.message = payload
    },
    [CHANGE_INFO](state, payload) {
      state.message = payload.newInfo
    }
  }
})

export default store