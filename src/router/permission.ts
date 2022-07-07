import { RouteRecordRaw } from 'vue-router'
const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/error',
    name: 'Error',
    component: () =>
      import(/* webpackChunkName: "error" */ '@/views/error/index.vue'),
    meta: {
      title: 'Error Pages'
    }
  }
]
export default constantRoutes
