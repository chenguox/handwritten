<template>
  <div class="about">
    <h3>=== About ===</h3>
  </div>
</template>

<script>
// 1. 导入 eventBus 实例
import eventBus from '../utils/event-bus'

export default {
  name: 'about',
  created() {
    // 2. 监听 aaa 事件
    eventBus.on("aaa", this.handleEventAAA)
  },
  unmounted() {
    // 取消监听
    console.log("取消 about 组件中的 aaa 事件的监听")
    eventBus.off("aaa", this.handleEventAAA)
  },
  methods: {
    handleEventAAA(payload) {
      console.log("About 组件中的 aaa 事件被触发, 执行了 handleEventAAA 函数", payload)
    }
  }
}
</script>