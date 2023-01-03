<template>
  <div class="app">
    <h4>Store Counter: {{ $store.state.counter }}</h4>
    <button @click="handleClick">加一</button>

    <h4>Store Message: {{ $store.state.message }}</h4>
    <button @click="changeMessage">修改message</button>

    <button @click="changeInfo">修改info</button>
  </div>
</template>

<script>
import { CHANGE_INFO } from './store/constant'

export default {
  methods: {
    handleClick() {
      this.$store.commit("increment")
    },
    changeMessage() {
      this.$store.commit("changeMessage", "你好啊! 李银河")
    },
    changeInfo() {
      this.$store.commit(CHANGE_INFO, {
        newInfo: "加油💪🏻!"
      })
    }
  }
}

</script>