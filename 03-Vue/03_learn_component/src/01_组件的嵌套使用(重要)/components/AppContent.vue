<template>
  <div class="app-content">
    App-Content
    <app-content-list></app-content-list>
  </div>
</template>

<script>
  import AppContentList from './AppContentList.vue'

  export default {
    name: 'app-content',
    components: {
      AppContentList
    }
  }
</script>

<style scoped></style>