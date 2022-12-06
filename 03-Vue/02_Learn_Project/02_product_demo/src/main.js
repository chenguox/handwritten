import { createApp } from 'vue'
import App from './App.vue'

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
