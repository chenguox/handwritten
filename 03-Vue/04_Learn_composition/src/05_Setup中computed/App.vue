<template>
  <div class="app">
    <h3>函数: {{ fullname1 }}</h3>
    <h3>对象: {{ fullname2 }}</h3>
    <button @click="setFullname">设置fullname</button>

    <hr>
    <h3>分数是否及格: {{ scoreLevel }}</h3>
  </div>
</template>

<script>
import { reactive, computed, ref } from 'vue'
export default {
  setup() {
    // 定义数据
    const names = reactive({
      firstName: "kobe",
      lastName: 'bryant'
    })

    // 1. 接收一个函数
    const fullname1 = computed(() => {
      return names.firstName + " " + names.lastName
    })

    // 2. 接收一个对象
    const fullname2 = computed({
      get: function() {
        return names.firstName + " " + names.lastName
      },
      set: function(newValue) {
        const tempNames = newValue.split(" ")
        names.firstName = tempNames[0]
        names.lastName = tempNames[1]
      }
    })

    function setFullname() {
      fullname2.value = "coder cgx"
      console.log(names)
    }

    // =========
    const score = ref(89)
    const scoreLevel = computed(() => {
      return score.value >= 60 ? '及格' : '不及格'
    })

    return {
      fullname1,
      fullname2,
      setFullname,

      scoreLevel
    }
  }
}

</script>