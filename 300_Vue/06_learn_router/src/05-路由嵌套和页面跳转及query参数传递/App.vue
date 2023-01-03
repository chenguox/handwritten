<template>
  <div class="app">
    <h3>05-路由嵌套和页面跳转</h3>
    <div class="nav">
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
    </div>

    <!-- 其他元素跳转 -->
    <button @click="homeBtnClick">首页</button>
    <span @click="aboutSpanClick">关于</span>

    <router-view></router-view>
  </div>
</template>

<!-- 1. 方式一
this.$router.push('/home')
this.$router.push({
  path: '/home'
}) -->

<script setup>
// 2. 在 setup 中实现跳转
import { useRouter } from 'vue-router'

const router = useRouter()

function homeBtnClick() {
  // router.push('/home')
  router.push({
    name: "home" // 通过name的方式
    // path: "/home"  // 通过path的方式
  })
}

function aboutSpanClick() {
  // router.push('/about')
  // 1. 传递query参数, 在 about 组件中接收
  router.push({
    path: '/about',
    query: {
      name: 'cgx',
      age: 18
    }
  })
}


</script>