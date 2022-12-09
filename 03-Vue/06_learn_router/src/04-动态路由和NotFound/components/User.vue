<template>
  <div class="user">
    <h3>User 组件</h3>
    <!-- 获取动态路由的值 -->
    <!-- 1. 在模板中获取到 id -->
    <h4>用户界面: {{ $route.params.id }}</h4>
  </div>
</template>

<script setup>
// 2. 在 created 中获取值 this.$route.params

// 3. 在 setup 中获取值
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

// route 包含当前路由的信息
const route = useRoute()
console.log(route.params.id)

// 获取route跳转id (从 User 组件 跳 User 组件)
onBeforeRouteUpdate((to, from) => {
  console.log("from:", from.params.id)
  console.log("to:", to.params.id)
})
</script>