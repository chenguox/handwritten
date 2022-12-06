import { createApp } from 'vue'
// import App from './01_组件的嵌套使用(重要)/App.vue'
// import App from './02_组件通信-父传子(重要)/App.vue'
import App from './03_组件通信-子传父(重要)/App.vue'

// 元素 -> createVNode: vue中的源码来完成
// compile的代码
// const App = {
//   template: `<h2>{{title}}</h2>`,
//   data() {
//     return {
//       title: "我也是标题"
//     }
//   }
// }


createApp(App).mount('#app')
