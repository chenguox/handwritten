<template>
  <div ref="divRef" :style="{width: width, height: height}"></div>
</template>

<script setup>
  import useEchart from '@/hooks/useEchart.js'
  import { ref, onMounted, watch } from 'vue'

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
      default: () => {
        return []
      }
    }
  })

  let divRef = ref(null)
  let myChart = null

  watch(() => props.echartDatas, (newV, oldV) => {
    setupEchart(newV)
  })
  
  onMounted(() => {
    setupEchart(props.echartDatas)
  })

  function setupEchart(echartDatas = []) {
    if(!myChart) {
      myChart = useEchart(divRef.value)
    }
    let option = getOption(echartDatas)
    myChart.setOption(option)
  }

  function getOption(echartDatas) {
    let category = echartDatas.map(item => {
      return item.name
    })

    let categoryData = echartDatas.map(item => {
      return item.value
    })

    let option = {
        // backgroundColor: "rgb(40,46,72)",
        grid: {
          left: "5%",
          right: "5%",
          top: "30%",
          bottom: "5%",
          containLabel: true, // grid 区域是否包含坐标轴的刻度标签
        },
        tooltip: {},
        xAxis: {
          // name: '月份',
          // 轴线
          axisLine: {
            show: true,
            lineStyle: {
              color: "#42A4FF",
            }
          },
          // 刻度
          axisTick: {
            show: false
          },
          // 标签
          axisLabel: {
            color: "white",
          },
          data: category
        },
        yAxis: {
          name: '个',
          nameTextStyle: {
            color: "white",
            fontSize: 13,
          },
          // 轴线
          axisLine: {
            show: true,
            lineStyle: {
              color: "#42A4FF",
            }
          },
          // 标签
          axisLabel: {
            color: "white"
          },
          // 刻度
          axisTick: {
            show: false,
          },
          // 分割线
          splitLine: {
            show: true,
            lineStyle: {
              color: "#42A4FF"
            }
          }
        },
        series: [
          {
            name: '销量',
            type: 'bar',
            barWidth: 17,
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#01B1FF", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#033BFF", // 100% 处的颜色
                  },
                ]
              },
            },
            data: categoryData
          }
        ]
    }
    
    return option
  }

</script>

<style scoped>
.bar-charts {
  color: red;
}
</style>