import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('../components/Home.vue'),
      children: [
        {
          path: "ranking", // /home/ranking
          component: () => import("../components/HomeRanking.vue")
        }
      ]
    },
    {
      path: '/about',
      component: () => import('../components/About.vue'),
    },
  ],
})

// 动态管理路由
let isAdmin = true
if (isAdmin) {
  // 一级路由
  const adminRoute = {
    path: '/admin',
    component: () => import('../components/Admin.vue'),
  }

  router.addRoute(adminRoute)

  // 二级路由
  router.addRoute('home', {
    path: 'recommend',
    component: () => import('../components/HomeRecommend.vue'),
  })
}

// 获取 router 中所有的映射路由对象
console.log(router.getRoutes())

export default router
