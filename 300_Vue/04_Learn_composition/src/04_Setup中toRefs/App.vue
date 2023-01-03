<template>
  <div class="app">
    <h3>info: {{ name }} - {{ age }} - {{ height }}</h3>
    <button @click="age++">修改age</button>
    <button @click="height = 1.99">修改height</button>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue'
export default {
  setup() {
    const info = reactive({
      name: 'cgx',
      age: 18,
      height: 1.88
    })

    // reactive 被结构后会变成普通的值,失去响应式
    // const { name, age } = info

    // 使用 toRefs 和 toRef 解决这个问题
    const { name, age } = toRefs(info)
    const height = toRef(info, 'height')

    return {
      name,
      age,
      height
    }
  }
}
</script>