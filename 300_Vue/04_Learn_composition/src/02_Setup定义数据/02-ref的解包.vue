<template>
  <div class="app">
    <!-- 1.1 默认情况下在template中使用ref时, vue会自动对其进行解包(取出其中value) -->
    <h3>当前计数: {{ counter }}</h3>
    <button @click="increment">加一</button>
    <hr>

    <!-- 2.1 ref 是浅层解包 -->
    <!-- counter 本身是一个响应式数据, 使用的时候不需要写.value -->
    <h3>当前计数info.counter: {{ info.counter }}</h3>
    <!-- 修改的时候需要写.value -->
    <button @click="info.counter.value++">修改info.counter</button>

    <!-- content 复杂数据类型, 内部的属性也是自动解包 -->
    <h3>当前计数content.counter: {{ content.counter }}</h3>
    <button @click="changeContent">修改content.counter</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    // ref 的解包
    let counter = ref(0)
    function increment() {
      // 1.2 在 template 中自动解包, 在 script 中是没有的, 所以需要手动取出其中的 value
      counter.value++
    }

    // 2.2 ref 是浅层解包, counter 在 info 对象中, 也会自动解包
    const info = {
      counter,
    }
    const content = ref({
      name: 'cgx',
      counter: 1
    })
    function changeContent(){
      content.value.counter++
      console.log(content.value.counter)
    }

    return {
      counter,
      increment,

      info,
      content,
      changeContent
    }
  }
}
</script>