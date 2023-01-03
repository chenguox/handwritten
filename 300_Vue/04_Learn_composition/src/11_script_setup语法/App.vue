<template>
  <div class="app">
    <show-info :message="message" @updateMessage="handelUpdateMessage"
    ref="showInfoRef"></show-info>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// 1. 所有编写在顶层中的代码, 都是默认暴露给 template 可以使用
import ShowInfo from './components/ShowInfo.vue'

// 组件通信
// 2. 定义响应式的数据
const message = ref("Hello Vue3!")

// 3. 定义绑定的函数
function handelUpdateMessage(payload) {
  message.value = payload
}

// 4.获取组件实例
const showInfoRef = ref()
onMounted(() => {
  showInfoRef.value.foo()
})

</script>