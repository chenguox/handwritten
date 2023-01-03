import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home' 
    },
    {
      name: 'home',
      path: '/home',
      component: () => import("../components/Home.vue")
    },
    // {
    //   name: 'about',
    //   path: '/about',
    //   component: () => import("../components/About.vue")
    // }
    {
      name: 'user',
      path: '/user/:id',
      component: () => import('../components/User.vue')
    },
    // 没有匹配到的路由, 固定匹配到该页面
    {
      name: 'not-found',
      // path: '/:pathMatch(.*)',
      // 多加个*会处理/后面的数据为数组
      // 原先 order/abc/123 现在 ['order','abc','123']
      path: '/:pathMatch(.*)*',
      component: () => import('../components/NotFound.vue')
    }
  ]
})

export default router