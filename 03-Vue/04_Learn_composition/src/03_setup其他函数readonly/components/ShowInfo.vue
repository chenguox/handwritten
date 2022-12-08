<template>
  <div class="show-info">
    <h2>ShowInfo: {{ info.name }}</h2>
    <!-- 违反规范(单项数据流),会报错 -->
    <!-- <button @click="info.name = 'kobe'">按钮2</button> -->
    <!-- 正确的做法: 符合单项数据流 -->
    <button @click="changeInfo">按钮2</button>

    <hr>
    <h3>使用 readonly 的数据: {{ roInfo.name }}</h3>
    <!-- 代码就会无效(报警告) -->
    <!-- <button @click="roInfo.name = 'james'">ShowInfo按钮</button> -->
    <!-- 正确的做法 -->
    <button @click="roInfoBtnClick">roInfo按钮</button>
  </div>
</template>

<script>
export default {
  props: {
    // reactive 数据
    info: {
      type: Object,
      default: () => ({}),
    },
    // readonly 数据
    roInfo: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['changeInfoName','changeRoInfoName'],
  setup(props, context) {
    function changeInfo() {
      context.emit('changeInfoName', 'kobe')
    }

    function roInfoBtnClick() {
      context.emit('changeRoInfoName', 'kobe')
    }

    return {
      changeInfo,
      roInfoBtnClick
    }
  },
}
</script>
