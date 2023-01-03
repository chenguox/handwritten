<template>
  <div class="bottom-content-wrapper">
    <template v-for="item in panelItems" :key="item.id">
      <div class="bottom-content">
        <div class="title">{{item.title}}</div>
        <div class="count-wrapper">
          <span :id="`total-num-${item.id}`" class="number">{{item.totalNum + item.unit}}</span>
          <div class="percentage-wrapper">
            <span :class="item.isUp ? 'up-triangle' : 'down-triangle'"></span>
            <span :class="item.isUp ? 'up' : 'down'" :id="`percentage-num-${item.id}`">{{item.percentage}}%</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { watch, nextTick, onMounted } from 'vue'
import { CountUp } from 'countup.js'

const props = defineProps({
  panelItems: {
    type: Array,
    default: () => {
      return []
    }
  }
})

watch(() => props.panelItems, (newV, newO) => {
    //在下一次dom更新完成之后会回调 
  nextTick(() => {
      startAnimation(newV)
  })
})

function startAnimation(panelItems = []) {
  console.log('startAnimation')
  const option1 = {
    decimalPlaces: 1, //保留以为小数
    duration: 2,
    useGrouping: false, // 1000 -> 1,000
  }

  const option2 = {
    decimalPlaces: 1, //保留以为小数
    duration: 2,
    useGrouping: false, // 1000 -> 1,000
    suffix: '%'
  }

  panelItems.forEach(item => {
    new CountUp(`total-num-${item.id}`, item.totalNum, option1).start()
    new CountUp(`percentage-num-${item.id}`, item.percentage, option2).start()
  })
}
</script>

<style scoped lang="less">
.bottom-content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 80px 40px 40px;
  box-sizing: border-box;

  .bottom-content {
    display: flex;
    flex-direction: column;

    .title {
      color: #fff;
      font-size: 16px;
    }

    .count-wrapper {
      display: flex;
      align-items: flex-end;
      margin-top: 10px;

      .number {
        font-size: 36px;
        font-weight: bold;
        color: #23aeff;
      }

      .percentage-wrapper {
        margin-left: 15px;

        .up-triangle {
          display: inline-block;
          width: 0;
          height: 0;
          border-bottom: 8px solid #c70013;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          margin-bottom: 4px;
        }

        .down-triangle {
          display: inline-block;
          width: 0;
          height: 0;
          border-top: 8px solid #37a72f;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          margin-bottom: 1px;
        }
        
        .up {
          color: red;
        }

        .down {
          color: #37a73f;
        }
      }
    }
  }
}
</style>
