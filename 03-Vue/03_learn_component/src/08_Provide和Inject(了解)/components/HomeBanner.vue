<template>
  <div class="home-banner">
    <h3>HomeBanner: {{ name }} - {{ age }}</h3>
    <h3>message: {{ message }}</h3>
    <h3>message2: {{ message2 }}</h3>
  </div>
</template>

<script>
export default {
  name: 'home-banner',
  inject: ['name', 'age', 'message', 'message2'],
}
</script>
