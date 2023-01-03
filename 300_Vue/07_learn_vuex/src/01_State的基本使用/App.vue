<template>
  <div class="app">
    <!-- 1. template 中直接获取 -->
    <h3>当前计数: {{ $store.state.counter }}</h3>
    <!-- 2. 使用 computed 进行处理 -->
    <h3>Computed当前计数: {{ storeCounter }}</h3>
    <!-- 3. setup  -->
    <h3>Setup 当前计数: {{ counter }}</h3>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  computed: {
    storeCounter() {
      return this.$store.state.counter
    }
  }
}
</script>

<script setup>
  import { toRefs } from 'vue'
  import { useStore } from "vuex"

  const store = useStore()
  const { counter } = toRefs(store.state)

  function increment() {
    store.commit("increment")
  }
</script>