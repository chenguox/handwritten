<template>
  <div class="app">
    <h4>Modules的基本使用</h4>
    <div>home message: {{ $store.state.home.message }}</div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

// 告诉 Vuex 发起网络请求
const store = useStore()
store.dispatch('fetchHomeMultidataAction').then(res => {
  console.log("home中的then被回调:", res)
})

</script>
