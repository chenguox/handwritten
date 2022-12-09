<template>
  <div class="not-found">
    <h3>
      NotFound: 您当前的路径{{
        $route.params.pathMatch
      }}不正确,请输入正确的路径!
    </h3>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.params)

</script>

<style scoped>
.not-found {
  color: red;
}
</style>
