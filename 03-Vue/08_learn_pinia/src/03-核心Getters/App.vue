<template>
  <div class="app">
    <h4>pinia-getters</h4>
    <div>doubleCount: {{ counterStore.doubleCount }}</div>
    <div>doubleCountAddOne: {{ counterStore.doubleCountAddOne }}</div>
    <div>friend-111: {{ counterStore.getFriendById(111) }}</div>
    <div>friend-112: {{ counterStore.getFriendById(112) }}</div>
    <div>showMessage: {{ counterStore.showMessage }}</div>
  </div>
</template>


<script setup>
import useCounter from './stores/modules/counter'

const counterStore = useCounter()

</script>