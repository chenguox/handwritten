<template>
  <div class="show-info">
    <h3>show-info 组件</h3>
    <h3>message: {{ message }}</h3>
    <button @click="changeMessage">修改 message 的值</button>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: "111"
  }
})

const emits = defineEmits(["updateMessage"])

function changeMessage() {
  emits('updateMessage', '你好啊, 李银河!')
}

function foo() {
  console.log('show-info 的 foo 函数')
}

defineExpose({
  foo
})

</script>