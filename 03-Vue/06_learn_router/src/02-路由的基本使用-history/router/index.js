import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'

// 映射关系
const routes = [
  { 
    path: "/",
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

// 创建一个路由
const router = createRouter({
  // 指定采用的模式: history
  history: createWebHistory(),
  routes
})

export default router