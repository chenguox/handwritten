<template>
  <div class="app">
    <h3>04-动态路由</h3>
    <div class="nav">
      <router-link to="/user/100">用户100</router-link> |
      <router-link to="/user/200">用户200</router-link> |
      <router-link to="/order/abc/123">订单</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>