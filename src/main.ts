import { createApp } from 'vue'
import App from './App.vue'

// 全局引入 vant css 样式
import 'vant/lib/index.css'
import { registeGlobalComponent } from './components/index'

import router from './router'

const app = createApp(App)
console.log('app ===', app)
// 自动注册全局组件
registeGlobalComponent(app)

app.use(router)

app.mount('#app')
