<template>
  <div class="app">
    <!-- 1. 回顾双向绑定 input v-model -->
    <input v-model="message">
    <input :value="message" @input="message = $event.target.value">
    <div>message: {{ message }}</div>

    <hr>

    <!-- 2. 组件的 v-model: 默认 modelValue -->
    <home v-model="homeMessage"></home>
    <home :modelValue="homeMessage" @update:modelValue="homeMessage = $event"></home>

    <hr>
    <!-- 3. 组件的 v-model: 自定义名称 -->
    <about v-model:counter="aboutCounter"
           v-model:message="aboutMessage"
    ></about>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'

export default {
  name: "app",
  components: {
    Home,
    About
  },
  data() {
    return {
      message: "Hello Vue!",
      homeMessage: "Hello Vue!",
      aboutMessage: "Hello Vue!",
      aboutCounter: 0
    }
  }
}
</script>