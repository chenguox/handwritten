<template>
  <div class="app">
    <h3>原生</h3>
    <h3 ref="titleRef" class="title">{{ message }}</h3>
    <button ref="btnRef" @click="handleBtn1">获取原生对象</button>

    <h3>组件</h3>
    <home ref="homeRef"></home>
    <button @click="handleBtn2">获取组件实例</button>
  </div>
</template>

<script>
import Home from './components/Home.vue'
export default {
  name: 'app',
  components: {
    Home,
  },
  data() {
    return {
      message: 'Hello Vue!',
    }
  },
  methods: {
    handleBtn1() {
      // 1.不要主动的去获取DOM, 并且修改DOM内容
      // 修改内容的方式:  
      // this.message = "你好啊, 李银河!"

      // 2.获取h2/button元素
      console.log(this.$refs.titleRef)
      console.log(this.$refs.btnRef)
    },
    handleBtn2() {
      // 3. 获取 home 组件: 组件实例
      console.log(this.$refs.homeRef)

      // 3.1 在父组件中可以主动的调用子组件的对象方法
      this.$refs.homeRef.homeClick()

      // 3.2 获取 home 组件实例,获取 home 中的元素
      console.log(this.$refs.homeRef.$el)

      // 3.3 如果 home template 是多个根, 拿到的是第一个 node 节点
      // 注意: 开发中不推荐一个组件的 template 中有多个根元素
      console.log(this.$refs.homeRef.$el.nextElementSibling)

      // 4. 组件实例还有两个属性(了解)
      console.log(this.$parent) // 获取父组件
      console.log(this.$root) // 获取根组件
    },
  },
}
</script>
