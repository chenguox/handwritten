export default {
  state: {
    message: 'Hello Vue',
    banners: [],
  },
  mutations: {
    changeBanners(state, banners) {
      state.banners = banners
    },
    changeMessage(state, newValue) {
      state.message = newValue
    }
  },
  actions: {
    fetchHomeMultidataAction(context) {
      setTimeout(() => {
        context.commit('changeMessage', '你好啊, 李银河!')
      }, 2000);


      return new Promise(async (resolve, reject) => {
        const res = await fetch('http://123.207.32.32:8000/home/multidata')
        const data = await res.json()

        // 修改 state 数据
        // context.commit('changerBanners', data.data.banner.list)
      })
    },
  },
}
