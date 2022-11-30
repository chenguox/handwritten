<template>
    <!-- echarts 的容器 -->
  <div ref="divRef" :style="{width: width, height: height}"></div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import * as echarts from 'echarts'

  const props = defineProps({
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
    echartDatas: {
      type: Array,
      default: []
    }
  })

  // 1. 获取元素 dom 对象
  let divRef = ref(null)

  onMounted(() => {
    // 2. 创建 echart 对象
    let myChart = echarts.init(divRef.value, null, { renderer: 'svg'})
    // 3. option 配置
    let option = getOption(props.echartDatas)
    // 4. setOption
    myChart.setOption(option)
  })
  
  function getOption(pieDatas = []) {

    let colors = pieDatas.map((item) => {
      return item.color;
    });

    // 将 pieDatas 格式的数据映射为 系列图所需要的数据格式
    let data = pieDatas.map(item => {
      return {
        value: item.value,
        name: item.name,
      }
    })

    // 计算总数
    let total = pieDatas.reduce((preValue, item) => {
      return item.value + preValue
    }, 0)

    let option = {
        // backgroundColor: "rgb(40,46,72)",
        color: colors,
        // 标题组件
        title: {
          text: `{nameSty| 充电桩总数}\n{number|${total}}`,
          top: "50%",
          left: "30%",
          textStyle: {
            rich: {
              nameSty: {
                fontSize: 19,
                color: "white",
                padding: [10, 0]
              },
              number: {
                fontSize: 24,
                color: "white",
                padding: [4, 0, 0, 20],
            },
            }
          },
        },
        grid: {
          show: false,
        },
        legend: {
          orient: "vertical", // 布局
          right: "10%",
          top: "18%",

          itemGap: 20,
          itemWidth: 16,
          itemHeight: 16,
          icon: "rect",

          // 自定义图例的名称
          formatter: function(name) {
            // 图例文本格式化 + 富文本定制样式
            var currentItem = pieDatas.find(item => item.name === name)
            return (
              "{nameSty|" +
              currentItem.name +
              "}\n" + 
              "{numberSty|" +
              currentItem.value +
              "个 }" + 
              "{preSty|" +
              currentItem.percentage +
              "}"
            )
          },
          textStyle: {
            rich: {
              nameSty: {
                fontSize: 12,
                color: "#FFFFFF",
                padding: [10, 14]
              },
              numberSty: {
                fontSize: 12,
                color: "#40E6ff",
                padding: [0, 0, 0, 14]
              },
              preSty: {
                fontSize: 12,
                color: "#40E6ff",
              }
            }
          }
        },    
        series: [
          {
            type: 'pie',
            center: ["40%", "57%"], // 饼图的中心（圆心）坐标
            roseType: "area", // 玫瑰图，通过半径展示数据的大小
            radius: ["30%", "75%"], // 饼图的半径，内半径和外半径
            label: {
              show: false,
            },
            data: data,
          }
        ]
      };

      return option
  }

</script>

<style scoped></style>