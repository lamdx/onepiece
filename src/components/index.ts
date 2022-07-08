import { createApp, App } from 'vue'
import {
  Icon,
  Button,
  Tabbar,
  TabbarItem,
  NoticeBar,
  Image as VanImage,
  Lazyload,
  Card
} from 'vant'
const globalComponent = [
  Icon,
  Button,
  Tabbar,
  TabbarItem,
  NoticeBar,
  VanImage,
  Lazyload,
  Card
]

/**
 * 注册全局组件
 * @param app 整个应用的实例
 */
// export function registeGlobalComponent(
//   app: ReturnType<typeof createApp>
// ): void {
//   globalComponent.forEach(component => app.use(component))
// }
export function registeGlobalComponent(app: App<Element>): void {
  globalComponent.forEach(component => app.use(component))
}
