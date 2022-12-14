import { createStore } from 'vuex'
import { CHANGE_INFO } from './constant'

const store = createStore({
  state: {
    counter: 100,
    message: 'Hello Vue',
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
    },
    // 重要的原则: 不要在mutation方法中执行异步操作
    // fetch("xxxx").then(res => {
    //   res.json().then(res => {
    //     state.name = res.name
    //   })
    // })
  },
})

export default store
