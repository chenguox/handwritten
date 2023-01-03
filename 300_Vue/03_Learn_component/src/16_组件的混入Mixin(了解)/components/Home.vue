<template>
  <div class="home">
    Home
  </div>
</template>

<script>
import messageMixin from '../mixins/message-mixin'

export default {
  name: 'home',
  mixins: [messageMixin],
  // 如果混入也有create,会对两种合并
  created() {
    console.log("home created")
  }
}
</script>