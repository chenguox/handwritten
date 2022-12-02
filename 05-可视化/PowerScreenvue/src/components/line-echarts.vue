<template>
  <!-- echart 的容器 -->
  <div ref="divRef" :style="{width: width, height: height}"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import useEchart from '@/hooks/useEchart'

const props = defineProps({
  width: {
    type: String,
    default: "100%"
  },
  height: {
    type: String,
    default: "100%"
  },
  echartDatas: {
    type: Array,
    default: []
  }
})

// 获取 dom 元素
const divRef = ref(null)

onMounted(() => {
  let myChart = useEchart(divRef.value)
  let option = getOption(props.echartDatas)
  myChart.setOption(option);
})

function getOption(echartDatas) {
  let option = {
      grid: {
        // show: false,
        left: "5%",
        right: "1%",
        top: "20%",
        bottom: "15%",
        containLabel: true
      },
      legend: {
        bottom: "5%",

        itemGap: 40, // 图例间隔
        itemWidth: 30, // 图例icon 宽度
        itemHeight: 12, // 图例icon 高度

        textStyle: {
          color: "#64BCFF",
        },
        icon: "rect",
      },
      xAxis: [
        {
          type: "category",
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#64BCFF",
          },
          splitLine: {
            show: false
          },
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
        }
      ],
      yAxis: [
        {
          type: "value",
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: true,
            color: "#64BCFF"
          },
        }
      ],
      series: [
        // 第一条折线图
        { 
          name: echartDatas[0].name,
          type: 'line',
          smooth: true, // 是否平滑曲线显示
          symbolSize: 5, // 标记的大小
          showSymbol: false,
          itemStyle: {
            color: "#20FF89",
          },
          // 区域填充样式。设置后显示成区域面积图。
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#20FF89",
                },
                {
                  offset: 1,
                  color: "rgba(255, 255, 255, 0)",
                },
              ],
            },
          },
          data: echartDatas[0].data,
        },

          // 第二条折线图 (  n 个系列图 )
          {
          name: echartDatas[1].name,
          type: "line",
          smooth: true, // 是否平滑曲线显示。
          symbolSize: 5, // 标记的大小，可以设置成诸如 10 这样单一的数字
          showSymbol: false, // 是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示。
          itemStyle: {
            // 折线的颜色
            color: "#EA9502",
          },
          // 折线区域的颜色
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#EA9502",
                },
                {
                  offset: 1,
                  color: "rgba(255, 255, 255, 0)",
                },
              ],
            },
          },
          data: echartDatas[1].data,
        },
      ]
  };

  return option
}

    

    
</script>

<style scoped lang="css"></style>