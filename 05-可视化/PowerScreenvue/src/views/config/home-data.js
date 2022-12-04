// 充电桩饱和比例
export const chargingPileData = [
  {
    value: 100,
    name: '广州占比',
    percentage: '5%',
    color: '#34D160',
  },
  {
    value: 200,
    name: '深圳占比',
    percentage: '4%',
    color: '#027FF2',
  },
  {
    value: 300,
    name: '东莞占比',
    percentage: '8%',
    color: '#8A00E1',
  },
  {
    value: 400,
    name: '佛山占比',
    percentage: '10%',
    color: '#F19610',
  },
  {
    value: 500,
    name: '中山占比',
    percentage: '20%',
    color: '#6054FF',
  },
  {
    value: 600,
    name: '珠海占比',
    percentage: '40%',
    color: '#00C6FF',
  },
]

// 流程监控的数据
export const processMonitoringData = [
  {
    name: '正常',
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    name: '异常',
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
]

// 充电数据统计
export const chargingStatisticsData = [
  {
    name: '一月',
    value: 0,
  },
  {
    name: '二月',
    value: 0,
  },
  {
    name: '三月',
    value: 0,
  },
  {
    name: '四月',
    value: 0,
  },
  {
    name: '五月',
    value: 0,
  },
  {
    name: '六月',
    value: 0,
  },
  {
    name: '七月',
    value: 0,
  },
]

// 异常监控
export const exceptionMonitoringData = [
  // {
  //     "id": 1,
  //     "name": "异常1",
  //     "value": 5,
  //     "dur": "10s",
  //     "begin": "0s"
  // },
  // {
  //     "id": 2,
  //     "name": "异常2",
  //     "value": 3,
  //     "dur": "10s",
  //     "begin": "-3s"
  // },
  // {
  //     "id": 3,
  //     "name": "异常3",
  //     "value": 5,
  //     "dur": "10s",
  //     "begin": "-5s"
  // }
]

// 充电桩Top4占比
export const chargingTop4Data = [
  {
    id: 1,
    name: "深圳",
    percentage: "0%",
  },
  {
    id: 2,
    name: "广州",
    percentage: "0%",
  },
  {
    id: 3,
    name: "东莞",
    percentage: "0%",
  },
  {
    id: 4,
    name: "佛山",
    percentage: "0%",
  },
  {
    id: 5,
    name: "其它",
    percentage: "0%",
  },
]

// 充电桩数据分析
export const dataAnalysisData = [
  {
    id: 1,
    title: "充电桩总数(个)",
    totalNum: 0,
    unit: "万",
    percentage: 0,
    isUp: true,
  },
  {
    id: 2,
    title: "年增长总数(个)",
    totalNum: 0,
    unit: "万",
    percentage: 0,
    isUp: true,
  },
  {
    id: 3,
    title: "月增长总数(个)",
    totalNum: 0,
    unit: "万",
    percentage: 0,
    isUp: false,
  },
]