<template>
  <div class="app">
    <!-- 1. 在模板中直接使用多个状态 -->
    <div class="template">
      <h4>1. 在模板中直接使用</h4>
      <div>name: {{ $store.state.name }}</div>
      <div>age: {{ $store.state.age }}</div>
      <div>height: {{ $store.state.height }}</div>
    </div>

    <!-- 2. 计算属性(映射状态: 数组语法) -->
    <div class="computed-array">
      <h4>2. mapState(数组)</h4>
      <div>name: {{ name }}</div>
      <div>age: {{ age }}</div>
      <div>height: {{ height }}</div>
    </div>

    <!-- 3. 计算属性(映射状态: 对象语法) -->
    <div class="computed-obj">
      <h4>3. mapState(对象)</h4>
      <div>name: {{ sName }}</div>
      <div>age: {{ sAge }}</div>
      <div>height: {{ sHeight }}</div>
    </div>

    <!-- 4. setup 计算属性(隐射状态: 对象语法) -->
    <div class="setup-obj">
      <h4>4. setup</h4>
      <div>name: {{ cName }}</div>
      <div>age: {{ cAge }}</div>
      <div>height: {{ cHeight }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    // 数组语法
    ...mapState(['name', 'age', 'height']),
    // 对象语法
    ...mapState({
      sName: (state) => state.name, // 可以重命名
      sAge: (state) => state.age,
      sHeight: (state) => state.height,
    }),
  },
}
</script>

<script setup>
import { computed, toRefs } from 'vue'
import { mapState, useStore } from 'vuex'
import useState from './hooks/useState'

// 1. 一步步完成
// const { name, age, height } = mapState(["name", "age", "height"])
// const store = useStore()
// const cName = computed(name.bind({ $store: store }))
// const cAge = computed(age.bind({ $store: store }))
// const cHeight = computed(height.bind({ $store: store }))

// 2. 使用 useState
// const { name, age, height} = useState(['name', 'age', 'height'])

// 3. 直接对 store.state 进行解构(推荐)
const store = useStore()
const { name, age, height } = toRefs(store.state)

function incrementLevel() {
  store.state.level++
}
</script>
