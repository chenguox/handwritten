<template>
  <div class="app">
    <h3>message: {{ message }}</h3>
    <button @click="message = '你好啊, 李银河!'">修改message</button>
    <h3>name: {{ info.friend.name }}</h3>
    <button @click="info.friend.name = 'james'">修改info</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue'

export default {
  setup() {
    // 1. 定义数据
    const message = ref('Hello Vue3!')
    const info = reactive({
      name: 'cgx',
      age: 18,
      friend: {
        name: 'kobe',
      },
    })

    // 2.侦听数据的变化
    watch(message, (newValue, oldValue) => {
      console.log('newValue:', newValue, 'oldValue:', oldValue)
    })

    // watch(info, (newValue, oldValue) => {
    //   console.log('newValue:', newValue, 'oldValue:', oldValue)
    //   console.log('newValue.friend.name:', newValue.friend.name)
    //   console.log(newValue === oldValue)
    // })
    watch(
      info,
      (newValue, oldValue) => {
        console.log('newValue:', newValue, 'oldValue:', oldValue)
        console.log('newValue.friend.name:', newValue.friend.name)
        console.log(newValue === oldValue)
      },
      { 
        // 立即执行一次
        immediate: true,
      }
    )

    // 3. 侦听 reactive 数据变化后, 获取普通对象
    watch(() => ({ ...info }), (newValue, oldValue) => {
      console.log('333333', newValue, oldValue)
    },{
      immediate: true,
      deep: true
    })

    return {
      message,
      info,
    }
  },
}
</script>
