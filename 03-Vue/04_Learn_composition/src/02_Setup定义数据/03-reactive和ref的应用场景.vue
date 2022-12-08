<template>
  <div class="app">
    <form>
      账号: <input type="text" v-model="account.username" /> 
      密码: <input type="password" v-model="account.password" />
    </form>

    <form>
      账号: <input type="text" v-model="username" /> 
      密码: <input type="password" v-model="password" />
    </form>
  </div>
</template>

<!-- reactive 和 ref 的应用场景 -->

<script>
import { onMounted, reactive, ref } from 'vue'

export default {
  setup() {
    // 定义响应式数据: reactive/ref
    // 强调: ref也可以定义复杂的数据
    // const info = ref({})
    // console.log(info.value)

    // 1. reactive 的应用场景
    // 1.1 条件一: reactive 应用于本地的数据
    // 1.2 条件二: 多个数据之间是有关系/联系(聚合的数据,组织在一起会有特定的作用)
    const account = reactive({
      username: 'codercgx',
      password: '123456',
    })

    // 也可以分开使用 ref 定义
    const username = ref("codercgx")
    const password = ref("123456")

    // 2. ref 的应用场景: 其他的场景基本都用 ref(computed)
    // 2.1 定义本地的一些简单数据
    const message = ref("Hello Vue")

    // 2.2 定义从网络中获取的数据也是使用 ref
    const musics = ref([])
    onMounted(() => {
      const serverMusics = ["海阔天空", "小苹果", "野狼"]
      musics.value = serverMusics
    })

    return {
      account,
      username,
      password,

      message
    }
  },
}
</script>
