<template>
  <div class="home">
    <h3>Home 组件</h3>
    <div class="nav">
      <router-link to="/home/recommend">推荐</router-link> |
      <router-link to="/home/ranking">排行榜</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
