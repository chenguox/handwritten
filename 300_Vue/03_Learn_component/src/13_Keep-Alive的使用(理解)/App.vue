<template>
  <div class="app">
    <div class="tabs">
      <template v-for="(item, index) in tabs" :key="item">
        <button :class="{ active: currentIndex === index}" @click="handleClick(item, index)">
          {{ item }}
        </button>
      </template>
    </div>

    <div class="view">
      <!-- include: 组件的名称来自于组件定义时 name 选项 -->
      <keep-alive include="home, about">
        <component :is="currentTab"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import About from './views/About.vue'
import Profile from './views/Profile.vue'

export default  {
  name: 'app',
  components: {
    Home,
    About,
    Profile
  },
  data() {
    return {
      tabs: ["home", "about", "profile"],
      currentIndex: -1,
      currentTab: 'home'
    }
  },
  methods: {
    handleClick(item, index) {
      this.currentIndex = index
      this.currentTab = this.tabs[index]
    }
  }
}
</script>

<style scoped>
.active {
  color: red;
}
</style>