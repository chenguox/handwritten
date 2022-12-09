import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import("../components/Home.vue")
    },
    {
      path: '/login',
      component: () => import("../components/Login.vue")
    }
  ]
})

// 路由导航守卫
// 进行任何的路由跳转之前,传入的beforeEach中的函数都会被回调

// 需求:进入首页时, 判断用户是否登录(localStorage)
// 情况一: 用户没有登录, 那么跳转到登录页面, 进行登录的操作
// 情况二: 用户已经登录, 那么直接进入到订单页面
router.beforeEach((to, from) => {
  // 1. 进入到任何别的页面时, 都跳转到login页面
  // if(to.path !== "/login") {
  //   return '/login'
  // }

  console.log(to, from)

  // 2. 进入到首页时, 判断用户是否登录
  const token = localStorage.getItem('token')
  if(to.path === '/home' && !token) {
    return '/login'
  }
})


export default router