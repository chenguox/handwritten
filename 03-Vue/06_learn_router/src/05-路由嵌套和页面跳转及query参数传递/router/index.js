import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'home',
      path: '/home',
      component: () => import("../components/Home.vue"),
      // 路由嵌套
      children: [
        {
          path: '/home',
          redirect: '/home/recommend'
        },
        {
          name: 'recommend',
          // 注意，以 / 开头的嵌套路径将被视为根路径。
          path: 'recommend',
          component: () => import("../components/HomeRecommend.vue")
        },
        {
          name: 'ranking',
          path: 'ranking',
          component: () => import("../components/HomeRanking.vue")
        }
      ]
    },
    {
      name: 'about',
      path: '/about',
      component: () => import("../components/About.vue")
    }
  ]
})

export default router