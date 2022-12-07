<template>
  <div class="app">
    <div class="tabs">
      <template v-for="item in tabs" :key="item">
        <button
          :class="{ active: currentTab === item }"
          @click="itemClick(item)"
        >
          {{ item }}
        </button>
      </template>
    </div>

    <!-- 动态组件 -->
    <!-- 1.第一种做法: v-if进行判断逻辑,决定要显示哪一个组件 -->
    <!-- <template v-if="currentIndex === 0">
      <home></home>
    </template>
    <template v-else-if="currentIndex === 1">
      <about></about>
    </template>
    <template v-else-if="currentIndex === 2">
      <profile></profile>
    </template> -->

    <hr />

    <!-- 2. 第二种方式: 动态组件 component -->
    <!-- is 中的组件需要俩字两个地方:
    1. 全局注册的组件
    2. 局部注册的组件 -->
    <!-- <component :is="tabs[currentIndex]"></component> -->
    <component
      :is="currentTab"
      name="cgx"
      :age="18"
      @homeClick="homeClick"
    ></component>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Profile from './components/Profile.vue'

export default {
  name: 'app',
  components: {
    Home,
    About,
    Profile,
  },
  data() {
    return {
      tabs: ['home', 'about', 'profile'],
      // currentIndex: 1,
      currentTab: 'home',
    }
  },
  methods: {
    itemClick(item) {
      console.log(item)
      this.currentTab = item
    },
    homeClick(payload) {
      console.log('homeClick:', payload)
    },
  },
}
</script>

<style scoped>
.active {
  color: red;
}
</style>
