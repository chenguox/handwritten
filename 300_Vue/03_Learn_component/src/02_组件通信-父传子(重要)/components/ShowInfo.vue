<template>
  <div class="show-info">
    <h3 :class="$attrs.class">姓名: {{ name }}</h3>
    <h3>年龄: {{ age }}</h3>
    <h3>身高: {{ height }}</h3>

    <h2>Message: {{ showMessage }}</h2>

  </div>

  <div class="others" v-bind="$attrs">other</div>
</template>

<script>
  export default {
    // 根节点不继承 attribute 属性
    inheritAttrs: false,

    name: 'show-info',
    // 1.porps 数组语法
    // 弊端: 1> 不能对类型进行验证 2> 没有默认值
    // props: ["name", "age", "height"]

    // 2.props对象语法(必须掌握)
    props: {
      name: {
        type: String,
        default: "默认的name"
      },
      age: {
        type: Number,
        required: true,
        default: 0
      },
      height: {
        type: Number,
        default: 2
      },
      // 重要的原则: 对象类型写默认值时, 需要编写default的函数, 函数返回默认值
      friend: {
        type: Object,
        default() {
          return { name: "james" }
        }
      },
      hobbies: {
        type: Array,
        default: () => ["篮球", "rap", "唱跳"]
      },
      // show-message 的形式
      showMessage: {
        type: String,
        default: "我是showMessage"
      }
    }
  } 
</script>

<style scoped>
.active {
  color: red;
}
</style>