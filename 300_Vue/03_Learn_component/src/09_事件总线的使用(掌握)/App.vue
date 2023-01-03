<template>
  <div class="app">
    <h3>=== App ===</h3>
    <home></home>
    <!-- <about></about> -->

    <h3>=== App ===</h3>
    <button @click="isShow = !isShow">控制下面的About组件的显示和隐藏</button>
    <about v-if="isShow"></about>
  </div>
</template>

<script>
import eventBus from './utils/event-bus'
import Home from './components/Home.vue'
import About from './components/About.vue'

export default {
  name: 'app',
  components: {
    Home,
    About,
  },
  data() {
    return {
      isShow: true,
    }
  },
  created() {
    eventBus.on('aaa', function (message, age) {
      console.log('app:', message, age)
    })
  },
}
</script>
