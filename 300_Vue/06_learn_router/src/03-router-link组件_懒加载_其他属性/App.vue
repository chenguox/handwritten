<template>
  <div class="app">
    <h3>App Content-03</h3>
    <div class="nav">
      <!-- to 属性: 可以接收一个字符串,或者一个对象 -->
      <h4>to属性:字符串/对象</h4>
      <router-link to="/home">首页</router-link>
      <router-link :to="{ path: '/about' }">关于</router-link>

      <hr>

      <!-- replace 属性: 当点击时,会调用 router.replace(), 而不是 router.push() -->
      <!-- active-class 属性: 激活a元素后应用的class,默认是router-link-active -->
      <h4>replact属性 和 active-class属性</h4>
      <router-link to="/home" replace>首页(默认)</router-link>
      <router-link to="/about" active-class="active">关于(指定active)</router-link>

      <!-- 其他: exact-active-class 属性 -->
      <!-- 链接精准激活时,应用于渲染的<a>的class, 默认是 router-link-exact-active -->

    </div>
    <!-- 占位 -->
    <router-view></router-view>
  </div>
</template>

<style>
.router-link-active {
  color: red;
  font-size: 20px;
}

.active {
  background: yellow;
}
</style>