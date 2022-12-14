<template>
  <div class="app">
    <h4>pinia action</h4>
    <!-- 展示数据 -->
    <h4>轮播的数据</h4>
    <ul>
      <template v-for="item in homeStore.banners">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import useHome from './stores/modules/home'

const homeStore = useHome()

homeStore.fetchHomeMultidate()

homeStore.fetchTestData().then(res => {
  console.log('fetchTestData', res)
})

</script>
