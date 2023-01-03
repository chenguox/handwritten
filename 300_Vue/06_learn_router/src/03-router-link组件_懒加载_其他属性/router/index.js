import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

// import Home from '../components/Home.vue'
// import About from '../components/About.vue'

// 路由的懒加载
const Home = () => import(/* webpackChunkName: 'home' */"../components/Home.vue")
// const About = () => import(/* webpackChunkName: 'about'*/"../components/About.vue")

// 到时打包会分包: 大概如下:
// home-chunk.779a84c4.js

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    { 
      // name 属性: 路由记录独一无二的名称
      name: 'home',
      path: '/home',
      component: Home,
      // meta 属性: 自定义的数据
      meta: {
        name: 'cgx',
        age: 18,
        height: 1.88
      }
    },
    {
      name: 'about',
      path: '/about',
      component: () => import("../components/About.vue")
    }
  ]
})

export default router