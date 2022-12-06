<template>
  <div id="app">
    <!-- 1. 展示个人信息 -->
    <show-info :name="name" :age="age" :height="height"></show-info>
    <hr />
    <!-- 2. 展示默认信息 -->
    <show-info :age="age" :height="height" show-message="哈哈哈哈"></show-info>
    <hr />
    <!-- 3. 如果当前的属性是一个 非 prop 的 attribute, 那么该属性会默认添加到子组件的根元素上 -->
    <show-info
      name="why"
      :age="18"
      :height="1.88"
      address="广州市"
      abc="cba"
      class="active"
    />
  </div>
</template>

<script>
import ShowInfo from './components/ShowInfo.vue'
export default {
  name: 'app',
  components: {
    ShowInfo,
  },
  data() {
    return {
      name: 'cgx',
      age: 18,
      height: 1.88,
    }
  },
}
</script>
