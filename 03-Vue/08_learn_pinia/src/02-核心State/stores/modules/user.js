import { defineStore } from 'pinia'

const useUser = defineStore("user", {
  state: () => ({
    name: 'codercgx',
    age: 18,
    level: 100
  }),
  actions: {

  }
})

export default useUser