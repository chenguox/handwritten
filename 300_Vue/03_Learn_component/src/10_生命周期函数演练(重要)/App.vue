<template>
  <div class="app">
    <h3>1. App 组件中的数据发生改变</h3>
    <div>message: {{ message }} - {{ counter }}</div>
    <button @click="changeMessage">修改 message</button>
    <button @click="changeCounter">加一</button>

    <h3>2. Home 组件的显示和隐藏</h3>
    <button @click="handleIsShow">显示/隐藏</button>
    <home v-if="isShowHome"></home>
  </div>
</template>

<script>
import Home from './components/Home.vue'
export default {
  name: 'app',
  components: {
    Home
  },
  // 生命周期演练
  // 1. 组件被创建之前
  beforeCreate() {
    console.log("App beforeCreate")
  },
  // 2. 组件被创建完成
  created() {
    console.log("App created")
    console.log("1. 发送网络请求, 请求数据")
    console.log("2. 监听 eventbus 事件")
    console.log("3. 监听 watch 数据")
  },
  // 3. 组件 template 准备被挂载
  beforeMount() {
    console.log("App beforeMount")
  },
  // 4. 组件 template 被挂载: 虚拟DOM -> 真实DOM
  mounted() {
    console.log("App mounted")
    console.log("1. 获取DOM")
    console.log("2. 使用DOM")
  },
  // 5. 数据发生改变
  // 5.1 准备更新DOM
  beforeUpadate() {
    console.log("App beforeUpdate")
  },
  // 5.2 更新DOM
  updated() {
    console.log("App updated")
  },
  // 6. 卸载VNode -> DOM元素
  // 6.1 卸载之前
  beforeUnmount() {
    console.log("App beforeUnmount")
  },
  // 6.2 DOM元素被卸载完成
  unmounted() {
    console.log("App unmounted")
  },
  // 生命周期演练
  data() {
    return {
      message: 'Hello Vue!',
      counter: 0,
      isShowHome: true
    }
  },
  methods: {
    changeMessage() {
      this.message = "你好啊,李银行!"
    },
    changeCounter() {
      this.counter++
    },
    handleIsShow() {
      this.isShowHome = !this.isShowHome
    }
  }
}
</script>