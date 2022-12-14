import { defineStore } from 'pinia'

const useUser = defineStore('user', {
  state: () => ({
    name: 'codercgx'
  }),
})

export default useUser