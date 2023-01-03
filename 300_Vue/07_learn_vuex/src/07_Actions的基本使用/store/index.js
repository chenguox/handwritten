import { createStore } from 'vuex'

const store = createStore({
  state: {
    counter: 100,
    message: 'Hello Vue',
    // 服务器数据
    banners:  []
  },
  mutations: {
    changeCounter(state) {
      state.counter++
    },
    changeMessage(state, payload) {
      state.message = payload
    },
    changeBanner(state, banners) {
      state.banners = banners
    }
  },
  actions: {
    changeCounterAction(context) {
      // console.log(context.commit) // 用于提交mutation
      // console.log(context.getters) // getters
      // console.log(context.state) // state
      context.commit('changeCounter')
    },
    changeNameAction(context, payload) {
      context.commit('changeMessage', payload)
    },
    // async fetchHomeMultidataAction(context) {
    //   const res = await fetch('http://123.207.32.32:8000/home/multidata')
    //   const data = await res.json()

    //   // 修改 state 数据
    //   context.commit("changeBanners", data.data.banner.list)
    // },
  },
})

export default store
