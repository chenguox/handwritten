<template>
  <div class="app">
    <h4>mapMutations</h4>
    <h4>Store Counter: {{ $store.state.counter }}</h4>
    <button @click="increment">加一</button>
    <button @click="cIncrement">加一</button>

    <h4>Store Message: {{ $store.state.message }}</h4>
    <button @click="changeMessage('你好啊, 李银河!')">修改message</button>
    <button @click="cChangeMessage('你好啊, 李银河!')">修改message</button>

    <button @click="changeInfo({ newInfo: '🆘' })">修改info</button>
    <button @click="cChangeInfo({ newInfo: '🆘' })">修改info</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { CHANGE_INFO } from '../05_Mutation的基本使用/store/constant'

export default {
  methods: {
    ...mapMutations(['increment', 'changeMessage', CHANGE_INFO]),
  },
}
</script>

<script setup>
import { mapMutations, useStore } from 'vuex'
import { CHANGE_INFO } from '../05_Mutation的基本使用/store/constant'

const store = useStore()

// 手动的映射和绑定
const mutations = mapMutations(['increment', 'changeMessage', CHANGE_INFO])
console.log(mutations)
const newMutations = {}
Object.keys(mutations).forEach((key) => {
  newMutations[key] = mutations[key].bind({ $store: store })
})
const {
  increment: cIncrement,
  changeMessage: cChangeMessage,
  changeInfo: cChangeInfo,
} = newMutations
</script>
