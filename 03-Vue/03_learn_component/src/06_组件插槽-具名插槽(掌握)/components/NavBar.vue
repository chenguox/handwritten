<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    margin-bottom: 20px;
  }

  .left {
    width: 80px;
    background-color: orange;
  }

  .center {
    flex: 1;
    background-color: skyblue;
  }

  .right {
    width: 80px;
    background-color: aquamarine;
  }
</style>