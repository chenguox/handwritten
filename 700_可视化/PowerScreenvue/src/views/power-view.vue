<template>
  <main class="screen-bg">
    <div class="header"></div>

    <div class="left-top">
      <pie-charts :echartDatas="chargingPile"></pie-charts>
    </div>
    <div class="left-bottom">
      <line-charts :echartDatas="processMonitoring"></line-charts>
    </div>

    <div class="right-top">
      <right-top-panel :panelItems="chargingTop4" :percentage="percentage"></right-top-panel>
    </div>
    <div class="right-center">
      <bar-charts :echartDatas="chargingStatistics"></bar-charts>
    </div>
    <div class="right-bottom">
      <right-bottom-svg :dots="exceptionMonitoring"></right-bottom-svg>
    </div>

    <div class="center">
      <center-svg></center-svg>
    </div>
    <div class="bottom">
      <bottom-panel :panelItems="dataAnalysis"></bottom-panel>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { getPowerScreenData } from '../services/index'
import PieCharts from '@/components/pie-echarts.vue'
import LineCharts from '@/components/line-echarts.vue'
import BarCharts from '@/components/bar-echarts.vue'
import RightBottomSvg from '@/components/right-bottom-svg.vue'
import RightTopPanel from '@/components/right-top-panel.vue'
import BottomPanel from '@/components/bottom-panel.vue'
import CenterSvg from '@/components/center-svg.vue'

import {
  chargingPileData,
  processMonitoringData,
  chargingStatisticsData,
  exceptionMonitoringData,
  chargingTop4Data,
  dataAnalysisData
} from '@/views/config/home-data.js'

// 充电桩的饱和比例
const chargingPile = ref(chargingPileData)
// 流程监控
const processMonitoring = ref(processMonitoringData)
// 充电桩数据分析
const chargingStatistics = ref(chargingStatisticsData)
// 异常监控
const exceptionMonitoring = ref(exceptionMonitoringData)
// 充电桩Top4占比
const chargingTop4 = ref(chargingTop4Data)
const percentage = ref(0)
// 充电桩数据分析
const dataAnalysis = ref(dataAnalysisData)

// 获取服务返回的数据
getPowerScreenData().then((result) => {
  console.log(result)
  chargingPile.value = result.data.chargingPile.data
  processMonitoring.value = result.data.processMonitoring.data
  chargingStatistics.value = result.data.chargingStatistics.data
  exceptionMonitoring.value = result.data.exceptionMonitoring.data
  chargingTop4.value = result.data.chargingTop4.data
  percentage.value = result.data.chargingTop4.totalPercentage
  dataAnalysis.value = result.data.dataAnalysis.data
})
</script>

<style scoped>
.screen-bg {
  /* 定位 */
  position: absolute;
  width: 100%;
  height: 100%;

  /* 背景 */
  background-image: url(@/assets/images/bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.header {
  /* 定位 */
  position: absolute;
  top: 21px;
  left: 0;
  right: 0;
  height: 56px;

  /* 背景 */
  background-image: url(@/assets/images/bg_header.svg);
  background-repeat: no-repeat;
}

.left-top {
  /* 定位 */
  position: absolute;
  top: 116px;
  left: 16px;
  width: 536px;
  height: 443px;

  /* 背景 */
  background-image: url(@/assets/images/bg_left-top.svg);
  background-repeat: no-repeat;
}

.left-bottom {
  /* 定位 */
  position: absolute;
  bottom: 49px;
  left: 16px;
  width: 536px;
  height: 443px;

  /* 背景 */
  background-image: url(@/assets/images/bg_left_bottom.svg);
  background-repeat: no-repeat;
}

.right-top {
  position: absolute;
  right: 17px;
  top: 96px;
  width: 519px;
  height: 343px;

  /* 背景 */
  background-image: url(@/assets/images/bg_right_top.svg);
  background-repeat: no-repeat;
}

.right-center {
  position: absolute;
  right: 17px;
  top: 443px;
  width: 519px;
  height: 327px;

  /* 背景 */
  background-image: url(../assets/images/bg_right_center.svg);
  background-repeat: no-repeat;
}

.right-bottom {
  position: absolute;
  right: 17px;
  bottom: 49px;
  width: 519px;
  height: 242px;

  display: flex;
  justify-content: center;
  align-items: center;

  /* 背景 */
  background-image: url(@/assets/images/bg_right_bottom.svg);
  background-repeat: no-repeat;
}

.center {
  position: absolute;
  right: 540px;
  bottom: 272px;
  width: 823px;
  height: 710px;

  /* border: 5px solid pink; */
}

.bottom {
  position: absolute;
  right: 540px;
  bottom: 49px;
  width: 823px;
  height: 209px;

  background-image: url(../assets/images/bg_bottom.svg);
  background-repeat: no-repeat;
}
</style>
