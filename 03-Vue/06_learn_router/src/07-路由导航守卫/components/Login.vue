<template>
  <div class="login">
    <h3>登录页面</h3>
    <button @click="loginClick">登录</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function loginClick() {
  // 向服务器发送请求, 服务器会返回token
  localStorage.setItem('token', 'codercgx')
  // 跳转到home页面
  router.push('/home')
}
</script>