import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// const files = require.context('./modules/', true, /\.ts$/)
// let modules: Array<RouteRecordRaw> = []
// files.keys().forEach((key) => {
//   if (key === './index.ts') return
//   modules = modules.concat(files(key).default)
// })

// 在使用 vite 时，发现不能使用 require.context 自动导入 modules,可以使用 import.meta.globEager替换
// [功能 | Vite 官方中文文档](https://cn.vitejs.dev/guide/features.html#json)

let modules: Array<RouteRecordRaw> = []
const files = import.meta.globEager('./modules/*.ts')
console.log('files ===', files) // {./modules/constant.ts: Module}
for (const key in files) {
  modules = modules.concat(files[key].default)
}
console.log('modules ===', modules)

let routes: Array<RouteRecordRaw> = []
routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/home/index.vue')
  },
  ...modules
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes // `routes: routes` 的缩写
})

export default router
