<template>
  <div class="home">
    <h3>home组件</h3>
    <h3>计数器: {{ counter }}</h3>
    <button @click="increment">+1</button>
    <button @click="decrement">+1</button>

    <hr />
    <h3>切换页面,修改title</h3>
    <button @click="popularClick">首页-流行</button>
    <button @click="hotClick">首页-热门</button>
    <button @click="songClick">首页-歌单</button>
  </div>
</template>

<script>
// import { ref } from 'vue'
import useTitle from '../hooks/useTitle'
import useCounter from '../hooks/useCounter'

export default {
  setup() {
    // 1. 修改 title
    const { title } = useTitle('home')

    // 2. counter 逻辑
    const { counter, increment, decrement } = useCounter()

    // 3.监听按钮的点击
    function popularClick() {
      title.value = '首页-流行'
    }
    function hotClick() {
      title.value = '首页-热门'
    }
    function songClick() {
      title.value = '首页-歌单'
    }
    return {
      counter,
      increment,
      decrement,
      popularClick,
      hotClick,
      songClick
    }
  },
}
</script>
