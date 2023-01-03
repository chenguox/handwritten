import * as echarts from 'echarts'
import { onUnmounted } from 'vue'

function useEchart(divEl) {

  // 1. echart 实例
  const echartInstance = echarts.init(divEl, null, { renderer: 'svg'})

  // 组件卸载移除操作
  onUnmounted(() => {
    echartInstance.dispose() // 销毁实例
  })

  // 设置 option 函数, 为了方便 该 hooks 的使用
  function setOption(option) {
    echartInstance.setOption(option)
  }

  function resizeEchart() {
    echartInstance.resize()
  }

  return {
    echartInstance,
    setOption,
    resizeEchart
  }
}

export default useEchart