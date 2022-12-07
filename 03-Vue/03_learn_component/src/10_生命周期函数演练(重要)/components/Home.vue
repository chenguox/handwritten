<template>
  <div class="home">
    <h3>我是 Home 组件</h3>
  </div>
</template>

<script>
export default {
  beforeUnmount() {
    console.log('home beforeUnmount')
  },
  unmounted() {
    console.log('home unmounted')
  },
}
</script>

<style scoped>
</style>