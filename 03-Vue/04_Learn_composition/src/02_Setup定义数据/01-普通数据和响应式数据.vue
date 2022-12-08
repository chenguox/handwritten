<template>
  <div class="app">
    <h3>1. 普通的数据 message : {{ message }}</h3>
    <button @click="changeMessage">修改message</button>

    <hr>
    <h3>2.1 响应式数据 reactive</h3>
    <h3>账号: {{ account.username }}</h3>
    <h3>密码: {{ account.password }}</h3>
    <button @click="changeAccount">修改账号</button>

    <hr>
    <h3>2.2 响应式数据 ref</h3>
    <!-- 默认情况下在template中使用ref时, vue会自动对其进行解包(取出其中value) -->
    <h3>当前计数: {{ counter }}</h3>
    <button @click="increment">加一</button>
    <h3>当前用户信息: {{ info.name + '-' + info.age + '-' + info.height }}</h3>
    <button @click="changeInfo">修改用户信息</button>
  </div>
</template>

<!-- 普通数据和响应式数据 -->

<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    // 1. 定义普通的数据
    // 可以正常的被使用, 缺点: 数据不是响应式
    let message = "Hello Vue"
    function changeMessage() {
      message = "你好啊,李银河!"
      console.log("普通的数据", message)
    }

    // 2. 定义响应式数据
    // 2.1 reactive函数: 定义复杂类型的数据
    const account = reactive({
      username: "codercgx",
      password: "123456"
    })
    function changeAccount() {
      account.username = "kobe"
    }

    // 2.1 ref函数:
    // 2.1.1 定义简单类型的数据
    const counter = ref(0)
    function increment() {
      counter.value++
    }
    // 2.1.2 定义复杂类型的数据
    const info = ref({
      name: 'cgx',
      age: 18,
      height: 1.88
    })
    function changeInfo() {
      info.value.age = 19
    }


    return {
      message,
      changeMessage,

      account,
      changeAccount,

      counter,
      increment,
      info,
      changeInfo
    }
  }
}
</script>