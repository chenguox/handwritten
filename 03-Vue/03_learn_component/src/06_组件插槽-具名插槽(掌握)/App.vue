<template>
  <div class="app">
    <!-- 1. 具名插槽的用法 -->
    <nav-bar>
      <template #left>
        <!-- 在父组件决定内容 -->
        <button>{{ leftText }}</button>
      </template>

      <template #center>
        <span>这是span内容</span>
      </template>

      <template #right>
        <a href="#">登录</a>
      </template>
    </nav-bar>

    <!-- nav-bar只给一个插槽传入数据 -->
    <nav-bar>
      <!-- 动态决定插槽插入的位置 -->
      <template v-slot:[position]>
        <a href="#">注册</a>
      </template>
    </nav-bar>
    <button @click="position = 'left'">左边</button>
    <button @click="position = 'center'">中间</button>
    <button @click="position = 'right'">右边</button>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar,
  },
  data() {
    return {
      position: 'center',
      leftText: '返回'
    }
  }
}
</script>
