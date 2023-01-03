<template>
  <div class="right-top-panel">
    <!-- 1. 水球 -->
    <water-ball class="right-water-ball" :percentage="percentage"></water-ball>
    <!-- 2. 图例 -->
    <div class="legend">
      <template v-for="item in panelItems" :key="item.name">
        <div class="legend-item-wrapper">
          <span :class="['dot', `area${item.id}`]"></span>
          <span class="name">{{ item.name }}</span>
          <span class="precentage">{{ item.percentage }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import WaterBall from './water-ball.vue'

const props = defineProps({
  panelItems: {
    type: Array,
    default: () => {
      return []
    },
  },
  percentage: {
    type: Number,
    default: 0,
  },
})
</script>

<style scoped lang="less">
.right-top-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  .right-water-ball {
    width: 269px;
    height: 199px;
    margin-top: 50px;
    margin-left: 40px;
  }

  .legend {
    flex: 1;
    display: flex;
    flex-direction: column;

    .legend-item-wrapper {
      margin-left: 40px;
      margin-top: 23px;
      display: flex;
      justify-items: center;

      span {
        margin-right: 10px;
        font-size: 20px;
      }
      .dot {
        // display: inline-block;
        width: 17px;
        height: 17px;
        border-radius: 50%;
      }

      .area1 {
        background-color: #209393;
      }

      .area2 {
        background-color: #1a54a5;
      }

      .area3 {
        background-color: #85caf0;
      }

      .area4 {
        background-color: #f5b64a;
      }

      .area5 {
        background-color: #ee792e;
      }

      .name {
        color: #fff;
      }
      .precentage {
        color: #0cd2ea;
      }
    }
  }
}
</style>
