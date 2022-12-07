<template>
  <div class="app">
    <home></home>
    <h3>App: {{ message }}</h3>
    <button @click="changeMessage">修改message</button>
  </div>
</template>

<script>
import { computed } from 'vue'
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  },
  data() {
    return {
      message: "你好啊!李银河"
    }
  },
  // provide 一般写成函数
  provide() {
    return {
      name: 'cgx',
      age: 18,
      // 没有响应式的
      message: this.message,
      // 使用 computed 实现响应式
      message2: computed(() => this.message)
    }
  },
  methods: {
    changeMessage() {
      this.message = "你好啊! cgx"
    }
  }
}
</script>
