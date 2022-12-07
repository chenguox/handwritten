<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="item">
      <div class="item">
        <span
          class="name"
          :class="{ active: currentIndex === index }"
          @click="handleClick(index)"
          >{{ item }}</span
        >
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'tab-control',
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    handleClick(index) {
      this.currentIndex = index
      this.$emit("tabItemClick", index)
    },
  },
  props: {
    titles: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
}
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 44px;
  line-height: 44px;
  /* width: 100%; */
  text-align: center;
}

.tab-control .item {
  flex: 1;
  /* width: 33.33%; */
  /* border: 1px solid #000; */
}

.tab-control .item .active {
  border-bottom: 3px solid red;
  padding: 8px;
}
</style>
