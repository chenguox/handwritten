<template>
  <div class="app">
    <!-- 1. 获取元素 -->
    <h3 ref="titleRef">我是标题</h3>
    <button ref="btnRef">按钮</button>

    <!-- 2. 获取组件实例 -->
    <show-info ref="showInfoRef"></show-info>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import ShowInfo from './components/ShowInfo.vue'

export default {
  components: {
    ShowInfo
  },
  setup() {
    // 1. 获取元素
    const titleRef = ref()
    const btnRef = ref()

    // 2. 获取组件实例
    const showInfoRef = ref()

    // mounted 的生命周期函数
    onMounted(() => {
      console.log(titleRef.value)
      console.log(btnRef.value)
      console.log(showInfoRef.value)

      showInfoRef.value.showInfoFoo()
    })

    return {
      titleRef,
      btnRef,

      showInfoRef
    }
  }
}

</script>