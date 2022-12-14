<template>
  <div class="app">
    <h4>mapAction</h4>
    <div>当前计数: {{ $store.state.counter }}</div>
    <button @click="changeCounterAction">发起action修改counter</button>

    <div>message: {{ $store.state.message }}</div>
    <button @click="changeMessageAction('bbb')">发起action修改message</button>
  </div>
</template>

<script>
// export default {
//   methods: {
//     counterBtnClick() {
//       this.$store.dispatch("changeCounterAction")
//     },
//     messageBtnClick() {
//       this.$store.dispatch("changeNameAction", "aaa")
//     }
//   }
// }
</script>

<script setup>
import { useStore, mapActions } from 'vuex'

const store = useStore()

// 1. 在 setup 中使用 mapActions 辅助函数
const actions = mapActions(['changeCounterAction', 'changeMessageAction'])
const newActions = {}
Object.keys(actions).forEach((key) => {
  newActions[key] = actions[key].bind({ $store: store })
})
const { changeCounterAction, changeMessageAction } = newActions

// 2.使用默认的做法
function increment() {
  store.dispatch('incrementAction')
}
</script>
