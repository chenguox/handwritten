<template>
  <div class="app">
    <!-- 需求: 实现一个计数器 -->
    <h3>当前计数: {{ counter }}</h3>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
// import { ref } from 'vue'
import useCounter from './hooks/useCounter'

export default {
  setup() {
    // 1. 定义 counter 的内容
    // 默认定义的数据都不是响应式数据
    // let counter = ref(0)
    // const increment = () => {
    //   counter.value++
    // }
    // const decrement = () => {
    //   counter.value--
    // }

    // 2. hook的初体验


    return {
      // counter,
      // increment,
      // decrement,
      ...useCounter()
    }
  },
}
</script>
