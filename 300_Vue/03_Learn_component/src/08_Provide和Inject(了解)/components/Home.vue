<template>
  <div class="home">
    <h3>Home</h3>
    <home-banner></home-banner>
  </div>
</template>

<script>
import HomeBanner from './HomeBanner.vue'

export default {
  name: 'home',
  components: {
    HomeBanner
  }
}
</script>