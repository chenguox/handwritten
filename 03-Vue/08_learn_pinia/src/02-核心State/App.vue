<template>
  <div class="app">
    <h4>核心State</h4>
    <div>name: {{ name }}</div>
    <div>age: {{ age }}</div>
    <div>level: {{ level }}</div>
    <button @click="changeState">修改state</button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import useUser from './stores/modules/user'

const userStore = useUser()
const { name, age, level } = storeToRefs(userStore)

function changeState() {
  // 1.一个个修改状态
  // userStore.name = "kobe"
  // userStore.age = 30
  // userStore.level = 200

  // 2. 一次性修改多个状态
  // userStore.$patch({
  //   name: "james",
  //   age: 35
  // })

  // 3. 替换 state 为新的对象
  const oldState = userStore.$state
  userStore.$state = {
    name: "curry",
    age: 30,
    level: 2000
  }
  console.log(oldState === userStore.$state)
}

</script>