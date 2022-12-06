<template>
  <h2>{{ title }}</h2>
  <h2>当前计数：{{ counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>

  <product-item></product-item>
</template>

<script>
import ProductItem from './components/ProductItem.vue'

export default {
  name: 'App',
  components: {
    ProductItem
  },
  data() {
    return {
      title: "我是标题",
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
