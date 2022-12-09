<template>
  <div class="app">
    <h3>App Content</h3>
    <div class="nav">
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
    </div>
    <!-- 路由占位 -->
    <router-view></router-view>
  </div>
</template>