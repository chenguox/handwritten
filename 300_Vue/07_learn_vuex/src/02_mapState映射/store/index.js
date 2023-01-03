import { createStore } from 'vuex'

const store = createStore({
  state: {
    // 多个状态
    name: 'cgx',
    age: 18,
    height: 1.88
  }
})

export default store