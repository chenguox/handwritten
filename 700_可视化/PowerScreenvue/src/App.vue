<template>
  <!-- 路由占位 -->
  <router-view />
</template>

<script setup>
  import { RouterView } from 'vue-router'
  import useScalePage from '@/hooks/useScalePage'

  // 缩放的配置应该由外界自定义
  const option = {
    targetX: 1920,
    targetY: 1080,
    targetRatio: 16 / 9
  }

  // 大屏适配
  useScalePage(option)

</script>

<style scoped>

</style>
