<template>
  <div class="app">
    App
    <show-info
      :info="info"
      @changeInfoName="changeInfoName"
      :roInfo="roInfo"
      @changeRoInfoName="changeRoInName"
    ></show-info>
  </div>
</template>

<script>
import { reactive, readonly } from 'vue'
import ShowInfo from './components/ShowInfo.vue'
export default {
  components: {
    ShowInfo,
  },
  setup() {
    // 1. 实现组件通信
    const info = reactive({
      name: 'cgx',
      age: 18,
      height: 1.88,
    })

    // 修改info.name的值
    function changeInfoName(name) {
      info.name = name
    }

    // 2. 使用 readOnly 包裹 info
    const roInfo = readonly(info)
    function changeRoInName(payload) {
      info.name = payload
    }

    return {
      info,
      changeInfoName,
      roInfo,
      changeRoInName,
    }
  },
}
</script>
