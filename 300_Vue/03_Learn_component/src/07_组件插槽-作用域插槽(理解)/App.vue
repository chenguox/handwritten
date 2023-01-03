<template>
  <div class="app">
    <!-- 1.tab-control 默认-->
    <tab-control
      :titles="pageContents"
      @tab-item-click="tabItemClick"
    ></tab-control>
    <h3>{{ pageContents[currentIndex] }}</h3>
    <hr />

    <!-- 2.tab-control 父组件决定内容 -->
    <tab-control :titles="pageContents" @tab-item-click="tabItemClick">
      <button>按钮</button>
    </tab-control>
    <hr />

    <!-- 3.tab-control 作用域插槽(接收子组件传过来的数据)-->
    <tab-control :titles="pageContents" @tab-item-click="tabItemClick">
      <template v-slot:default="props">
        <button>{{ props.item }}</button>
      </template>
    </tab-control>
    <hr />

    <!-- 4.tab-control 作用域插槽(简写)-->
    <tab-control :titles="pageContents" @tab-item-click="tabItemClick">
      <template #default="props">
        <a href="#">{{ props.item }}</a>
      </template>
    </tab-control>
    <hr />

    <!-- 5.tab-control 独占默认插槽的简写(了解) -->
    <tab-control :titles="pageContents" @tab-item-click="tabItemClick">
      <template v-slot="props">
        <button>{{ props.item }}</button>
      </template>
    </tab-control>
    <hr />

    <!-- 6.tab-control 如果只有一个默认插槽, 那么template可以省略 -->
    <tab-control
      :titles="pageContents"
      @tab-item-click="tabItemClick"
      v-slot="props"
    >
      <button>{{ props.item }}</button>
    </tab-control>
    <hr />
  </div>
</template>

<script>
import TabControl from './components/TabControl.vue'

export default {
  name: 'app',
  components: {
    TabControl,
  },
  data() {
    return {
      pageContents: ['衣服', '鞋子', '裤子'],
      currentIndex: 0,
    }
  },
  methods: {
    tabItemClick(index) {
      console.log('app:', index)
      this.currentIndex = index
    },
  },
}
</script>
