<template>
  <div class="app">
    <h4>doubleCounter: {{ doubleCounter }}</h4>
    <h4>totalAge: {{ totalAge }}</h4>
    <h4>message: {{ message }}</h4>
    <button @click="changeAge">修改name</button>

    <!-- 根据id获取某一个朋友的信息 -->
    <h4>id-111的朋友信息: {{ getFriendById(111) }}</h4>
    <h4>id-112的朋友信息: {{ getFriendById(112) }}</h4>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['doubleCounter', 'totalAge']),
    ...mapGetters(["getFriendById"])
  }
}
</script>

<script setup>
import { computed, toRefs } from 'vue'
import { mapGetters, useStore } from 'vuex'

const store = useStore()

// 1. 使用 mapGetters
// const { message: messageFn } = mapGetters(["message"])
// const message = computed(messageFn.bind({ $store: store }))

// 2. 直接解构, 并包裹成ref
// const { message } = toRefs(store.getters)

// 3. 针对某一个 getters  属性使用  computed
const message = computed(() => store.getters.message)

function changeAge() {
  store.state.name = "kobe"
}

</script>