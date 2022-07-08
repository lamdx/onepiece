import { createApp } from 'vue'
import App from './App.vue'
// 全局引入 vant css 样式
import 'vant/lib/index.css'
import { registeGlobalComponent } from './components/index'
import router from './router'
import { createPinia } from 'pinia'

import './assets/styles/index.css'

const app = createApp(App)
console.log('app ===', app)

// 自动注册全局组件
registeGlobalComponent(app)

app.use(router)

const pinia = createPinia()
app.use(pinia)

app.mount('#app')
