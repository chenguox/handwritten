<template>
  <div class="home">
    <h3>Home: {{ modelValue }}</h3>
    <button @click="changeValue">修改 modelValue 的值</button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  methods: {
    changeValue() {
      this.$emit("update:modelValue", "你好啊,李银河!")
    }
  }
}
</script>