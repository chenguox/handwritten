<template>
  <div class="home">
    <h3>Home组件</h3>
    <h3>当前计数: {{ counter }}</h3>
    <button @click="counter++">+1</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      counter: 0,
    }
  },
  created() {
    console.log('home created')
  },
  unmounted() {
    console.log('home unmounted')
  },
  // 对于保持keep-alive组件, 监听有没有进行切换
  // keep-alive组件进入活跃状态
  activated() {
    console.log('home activated')
  },
  deactivated() {
    console.log('home deactivated')
  },
}
</script>
