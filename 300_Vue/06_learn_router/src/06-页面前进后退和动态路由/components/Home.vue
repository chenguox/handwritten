<template>
  <div class="home">
    <h3>home 页面</h3>
    <button @click="forward">前进</button>
    <router-link to="/home/recommend">首页-推荐</router-link>
    <!-- 占位组件 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function forward() {
  // 向前移动一条记录
  router.go(1)
  // 等同于
  router.forward()
}
</script>
