<template>
  <div class="about">
    <h3>about页面</h3>
    <button @click="back">返回</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function back() {
  // 向前移动一条记录
  router.go(-1)
  // 等同于
  router.back()
}

</script>