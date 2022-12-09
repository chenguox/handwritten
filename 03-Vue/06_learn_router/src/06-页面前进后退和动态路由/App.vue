<template>
  <div class="app">
    <h3>06-页面前进后退和动态路由</h3>
    <div class="nav">
      <!-- replace 替换操作 -->
      <router-link to="/home" replace>首页</router-link>
      <router-link to="/about" custom v-slot="{ navigate }">
        <button @click="navigate">关于</button>
      </router-link>
      <router-link to="/admin">管理页面</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>