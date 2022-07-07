import { RouteRecordRaw } from 'vue-router'
const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/siri',
    name: 'Siri',
    component: () =>
      import(/* webpackChunkName: "siri" */ '@/views/siri/index.vue')
  },
  {
    path: '/music',
    name: 'Music',
    component: () =>
      import(/* webpackChunkName: "music" */ '@/views/music/index.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () =>
      import(/* webpackChunkName: "search" */ '@/views/search/index.vue')
  },
  {
    path: '/error',
    name: 'Error',
    component: () =>
      import(/* webpackChunkName: "error" */ '@/views/error/index.vue')
  }
]
export default constantRoutes
