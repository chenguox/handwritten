<template>
  <div class="app">
    <h4>发送网络请求</h4>
    <ul>
      <template v-for="item in $store.state.banners" :key="item.acm">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
// console.log("store: ",store)
// 告诉 Vuex 发送网络请求
store.dispatch("fetchHomeMultidataAction").then(res => {
  console.log("home中的then被回调:", res)
})


</script>