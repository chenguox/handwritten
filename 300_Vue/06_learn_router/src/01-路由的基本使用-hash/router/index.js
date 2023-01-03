import {
  createRouter, createWebHashHistory
} from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'

// 创建一个路由:映射关系
const router = createRouter({
  // 指定采用的模式: hash
  history: createWebHashHistory(),
  // 映射关系
  routes: [
    {
      path: "/",
      // 重定向
      redirect: "/home"
    },
    {
      name: "home",
      path: "/home",
      component: Home
    },
    {
      name: "about",
      path: "/about",
      component: About
    }
  ]
})
  
export default router