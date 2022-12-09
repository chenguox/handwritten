<template>
  <div class="about">
    <h3>About 组件</h3>
    <!-- 1. 在template 中获取 query 的值 -->
    <h4>query: {{ $route.query }}</h4>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.query)

</script>