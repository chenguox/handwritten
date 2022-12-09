import { createApp } from 'vue'
// import App from './App.vue'

// 01-路由的基本使用-hash
// import App from './01-路由的基本使用-hash/App.vue'
// import router from './01-路由的基本使用-hash/router/index'

// 02-路由的基本使用-history
// import App from './02-路由的基本使用-history/App.vue'
// import router from './02-路由的基本使用-history/router/index'

// 03-router-link和懒加载
// import App from './03-router-link组件_懒加载_其他属性/App.vue'
// import router from './03-router-link组件_懒加载_其他属性/router/index'

// 04-动态路由和NotFound
// import App from './04-动态路由和NotFound/App.vue'
// import router from './04-动态路由和NotFound/router/index'

// 05-路由嵌套和页面跳转
// import App from './05-路由嵌套和页面跳转及query参数传递/App.vue'
// import router from './05-路由嵌套和页面跳转及query参数传递/router/index'

// 06-页面前进后退和动态路由
// import App from './06-页面前进后退和动态路由/App.vue'
// import router from './06-页面前进后退和动态路由/router/index'

// 07-路由导航守卫
import App from './07-路由导航守卫/App.vue'
import router from './07-路由导航守卫/router/index'


const app = createApp(App)
app.use(router)
app.mount('#app')
