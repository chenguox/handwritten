<template>
  <div class="home-banner">
    <h3>=== Home-Banner ===</h3>
    <button @click="handleClick">点击发送 aaa 事件</button>
  </div>
</template>

<script>
import eventBus from '../utils/event-bus'

export default {
  name: 'home-banner',
  methods: {
    handleClick() {
      eventBus.emit("aaa", '你好啊!李银行', 18)
    }
  }
}
</script>

<style scoped>
</style>