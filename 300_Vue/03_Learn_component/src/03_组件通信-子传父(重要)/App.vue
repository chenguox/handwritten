<!-- 需求: 实现一个计数器, + 和 - 按钮由子组件提供, 子组件通知父组件进行加和减 -->
<template>
  <div class="app">
    <h3>计数器: {{ counter }}</h3>
    <!-- 1.自定义add-counter, 并且监听内部的add事件 -->
    <add-counter @add="addBtnClick"></add-counter>
    <add-counter @add="addBtnClick"></add-counter>
    
    <!-- 2.自定义sub-counter, 并且监听内部的sub事件 -->
    <sub-counter @sub="subBtnClick"></sub-counter>
  </div>
</template>

<script>
import AddCounter from './components/AddCounter.vue'
import SubCounter from './components/SubCounter.vue'

export default {
  name: 'app',
  components: {
    AddCounter,
    SubCounter
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    addBtnClick(count) {
      this.counter += count
    },
    subBtnClick(count) {
      this.counter -= count
    }
  }
}
</script>