<template>
  <div class="about">
    <h3>About 组件</h3>
    <h3>counter: {{ counter }}</h3>
    <button @click="changeCounter">修改counter的值</button>

    <h3>message: {{ message }}</h3>
    <button @click="changerMessage">修改message的值</button>
  </div>
</template>

<script>
export default {
  name: 'about',
  props: {
    counter: {
      type: Number,
      default: 0
    },
    message: {
      type: String,
      default: ""
    }
  },
  emits: ["update:counter", "update:message"],
  methods: {
    changeCounter() {
      const counter = this.counter + 1
      this.$emit("update:counter", counter)
    },
    changerMessage() {
      this.$emit("update:message", "你好啊, 李银河!")
    }
  }
}
</script>