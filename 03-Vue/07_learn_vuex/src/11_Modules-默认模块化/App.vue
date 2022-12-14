<template>
  <div class="app">
    <h4>Counter Page</h4>
    <!-- 1. 使用 state 时, 是需要 state.moduleName.xxx -->
    <div>Counter模块的counter: {{ $store.state.counter.count }}</div>
    <!-- 2. 使用 getters 时, 是直接 getters.xxx -->
    <div>Counter模块的doubleCounter: {{ $store.getters.doubleCount }}</div>

    <button @click="incrementCount">count模块+1</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
// 派发事件时, 默认也是不需要跟模块名称
// 提交 mutation 时, 默认也是不需要跟模块名称
// function incrementCount() {
//   store.dispatch("incrementCountAction")
// }
// 设置了 namespace 就需要

</script>