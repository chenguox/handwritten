<template>
  <div class="app">
    <h4>Pinia 基础使用</h4>
    <div>count: {{ counterStore.count }}</div>
    <div>count: {{ count }}</div>
    <button @click="addCount">count+1</button>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'
import { storeToRefs } from 'pinia'
import useCounter from "./stores/modules/counter"

const counterStore = useCounter()
// 解雇出store中的数据,可以使用 toRefs 或者 storeToRefs
// const { count } = toRefs(counterStore)
const { count } = storeToRefs(counterStore)

function addCount() {
  counterStore.count++
}

</script>