<template>
  <div class="add-counter">
    <h3>add-counter按钮</h3>
    <button @click="btnClick(1)">+1</button>
    <button @click="btnClick(5)">+5</button>
    <button @click="btnClick(10)">+10</button>
  </div>
</template>

<script>
export default {
  name: 'add-counter',

  // 1. emits 数组语法
  // emits: ["add"],
  // 2. emits 对象语法
  emits: {
    add: function(count) {
      if(count <= 10) {
        return true
      }
      return false
    }
  },
  methods: {
    btnClick(count) {
      // 让子组件发出去一个自定义事件
      // 第一个参数自定义的事件名称
      // 第二个参数是传递的参数
      this.$emit("add", count)
    }
  }
}
</script>

<style scoped></style>