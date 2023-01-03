import { defineStore } from 'pinia'
import useUser from './user'

const useCounter = defineStore('counter', {
  state: () => ({
    count: 100,
    friends: [
      { id: 111, name: "cgx" },
      { id: 112, name: "kobe" },
      { id: 113, name: "james" },
    ]
  }),
  getters: {
    // 1. 基本使用
    doubleCount(state) {
      return state.count * 2
    },
    // 2. 一个 getter 引入另外一个 getter
    doubleCountAddOne() {
      // this 是 store 实例
      return this.doubleCounter + 1
    },
    // 3. getters 也支持返回一个函数
    getFriendById(state) {
      return function(id) {
        for(let i = 0; i < state.friends.length; i++) {
          const friend = state.friends[i]
          if(friend.id === id) {
            return friend
          }
        }
      }
    },
    // 4. getters 中用到别的 store 中的数据
    showMessage(state) {
      // 1. 获取 user 信息
      const userStore = useUser()
      // 2. 获取自己的信息
      // 3. 拼接信息
      return `name: ${userStore.name}-count:${state.count}`
    }
  },
  actions: {
    increment() {
      this.count++
    },
    incrementNum(num) {
      this.count += num
    }
  }
})

export default useCounter