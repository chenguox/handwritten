import { createStore } from 'vuex'

const store = createStore({
  state: {
    banners: [],
    recommends: [],
  },
  mutations: {
    changeBanner(state, payload) {
      state.banners = payload
    },
    changeRecommends(state, payload) {
      state.recommends = payload
    },
  },
  actions: {
    async fetchHomeMultidataAction(context) {
      console.log('====')
      const res = await fetch('http://123.207.32.32:8000/home/multidata')
      const data = await res.json()
      console.log('data:', data)

      // 修改 state 数据
      context.commit('changeBanners', data.data.banner.list)
      context.commit('changeRecommends', data.data.recommend.list)
    },
  },
})

export default store
