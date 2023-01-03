<template>
  <div class="show-info">
    show-info
  </div>
</template>

<script>
export default {
  setup() {
    function showInfoFoo() {
      console.log('show-info: foo')
    }

    return {
      showInfoFoo
    }
  }
}
</script>