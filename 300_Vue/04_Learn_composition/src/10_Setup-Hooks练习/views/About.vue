<template>
  <div class="about">
    <h2>About计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <hr>
    <h3>页面滚动</h3>
    <div class="scroll">
      <h3>x: {{ scrollPosition.x }}</h3>
      <h3>y: {{ scrollPosition.y }}</h3>
    </div>
  </div>
</template>

<script>
import useTitle from '../hooks/useTitle'
import useCounter from '../hooks/useCounter'
import useScrollPosition from '../hooks/useScorllPosition'

export default {
  setup() {
    // 1. 修改 title
    useTitle('about')

    // 2. 监听滚动
    const { scrollPosition } = useScrollPosition()

    return {
      ...useCounter(),
      scrollPosition
    }
  },
}
</script>
