import { createApp } from 'vue'
// import App from './App.vue'
// import App from './01-基本使用/App.vue'
// import pinia from './01-基本使用/stores/index'

import App from './02-核心State/App.vue'
import pinia from './02-核心State/stores/index'

createApp(App).use(pinia).mount('#app')
