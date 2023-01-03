<template>
  <div class="app">
    <h4>vue中使用axios</h4>
  </div>
</template>

<script setup>
import gxRequest from './service/index'

gxRequest.request({
  url: "/home/multidata"
}).then(res => {
  console.log("res:", res)
})

</script>