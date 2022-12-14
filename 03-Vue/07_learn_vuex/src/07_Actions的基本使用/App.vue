<template>
  <div class="app">
    <h4>action的基本使用</h4>
    <div>当前计数: {{ $store.state.counter }}</div>
    <button @click="counterBtnClick">发起action修改counter</button>

    <div>message: {{ $store.state.message }}</div>
    <button @click="messageBtnClick">发起action修改message</button>
  </div>
</template>

<script>
export default {
  methods: {
    counterBtnClick() {
      this.$store.dispatch("changeCounterAction")
    },
    messageBtnClick() {
      this.$store.dispatch("changeNameAction", "aaa")
    }
  }
}
</script>