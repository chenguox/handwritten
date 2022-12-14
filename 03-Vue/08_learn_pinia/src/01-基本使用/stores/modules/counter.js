import { defineStore } from 'pinia'

const useCounter = defineStore("counter", {
  state: () => ({
    count: 99
  }),
  actions: {
    increment() {
      this.count++
    }
  }
})

export default useCounter