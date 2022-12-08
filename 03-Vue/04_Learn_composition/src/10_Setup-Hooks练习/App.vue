<template>
  <div class="app">
    <button @click="currentView = 'home'">Home</button>
    <button @click="currentView = 'about'">About</button>

    <component :is="currentView"></component>


    <br><br><br><br><br><br>
    <br><br><br><br><br><br>
    <br><br><br><br><br><br>
    <br><br><br><br><br><br>
    <br><br><br><br><br><br>
    <br><br><br><br><br><br>
    <br><br><br><br><br><br>
    <br><br><br><br><br><br>
    <br><br><br><br><br><br>
    <br><br><br><br><br><br>
    <br><br><br><br><br><br>
  </div>
</template>

<script>
import { ref } from 'vue'
import Home from './views/Home.vue'
import About from './views/About.vue'

export default {
  components: {
    Home,
    About
  },
  setup() {
    const currentView = ref('home')

    return {
      currentView,
    }
  }
}
</script>