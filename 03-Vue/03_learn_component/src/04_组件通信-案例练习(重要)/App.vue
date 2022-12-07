<template>
  <div class="app">
    <!-- 1.tab-control -->
    <tab-control :titles="pageContents"           @tab-item-click="tabItemClick"></tab-control>

    <!-- 2.展示内容 -->
    <h3>{{ pageContents[currentIndex] }}</h3>
  </div>
</template>

<script>
import TabControl from './components/TabControl.vue'

export default {
  name: 'app',
  components: {
    TabControl
  },
  data() {
    return {
      pageContents: ['衣服列表', '鞋子列表', '裤子列表'],
      currentIndex: 0
    }
  },
  methods: {
    tabItemClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
