import { createStore } from 'vuex'

const store = createStore({
  state: {
    counter: 2,
    name: 'cgx',
    friends: [
      { id: 111, name: "why", age: 20 },
      { id: 112, name: "kobe", age: 30 },
      { id: 113, name: "james", age: 25 }
    ],
  },
  getters: {
    // 1. 基本使用
    doubleCounter(state) {
      return state.counter * 2
    },
    totalAge(state) {
      return state.friends.reduce((preValue, item) => {
        return preValue + item.age
      }, 0)
    },
    // 2. 在读 getters 属性中, 获取其他 getters
    message(state, getters) {
      return `name:${state.name} friendTotalAge: ${getters.totalAge}`
    },
    // 3.getters是可以返回一个函数的, 调用这个函数可以传入参数(了解)
    getFriendById(state) {
      return function(id) {
        const friend = state.friends.find(item => item.id === id)
        return friend
      }
    }
  }
})
 
export default store