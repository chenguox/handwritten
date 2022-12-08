<template>
  <div class="app">
    <h3>AppContent: {{ name }}</h3>
    <button @click="name = 'kobe'">app btn</button>

    <hr>

    <home></home>
  </div>
</template>

<script>
import { ref, provide } from 'vue'
import Home from './components/Home.vue'

export default {
  components: {
    Home
  },
  setup() {
    const name = ref('cgx')

    // 响应式数据 : name
    provide("name", name)
    // 普通数据 : 18
    provide("age", 18)

    return {
      name
    }
  }
}
</script>