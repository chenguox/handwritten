<template>
  <div class="app">
    <home></home>
    <about></about>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'

export default {
  name: 'app',
  components: {
    Home,
    About
  }
}
</script>