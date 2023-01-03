import { createStore } from 'vuex'
import homeModule from './modules/home'
import counterModule from './modules/counter'


const store = createStore({
  state: () => ({

  }),
  modules: {
    home: homeModule,
    counter: counterModule
  }
})


export default store