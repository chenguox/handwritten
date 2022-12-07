<template>
  <div class="app">
    <!-- 1. 内容是button -->
    <show-message>
      <button>我是按钮元素</button>
    </show-message>

    <!-- 2. 内容是超链接 -->
    <show-message>
      <a href="#">百度一下</a>
    </show-message>

    <!-- 3. 内容是一张图片 -->
    <show-message>
      <img class="image" src="@/img/kobe02.png" alt="">
    </show-message>

    <!-- 4. 内容没有传递(默认) -->
    <show-message></show-message>
  </div>
</template>

<script>
import ShowMessage from './components/ShowMessage.vue'

export default {
  name: 'app',
  components: {
    ShowMessage
  }
}
</script>

<style>
.image {
  width: 100px;
  height: 100px;
}
</style>