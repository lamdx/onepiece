import { createApp, App } from 'vue'
import { Button, Tabbar, TabbarItem, Toast } from 'vant'
const globalComponent = [Button, Tabbar, TabbarItem, Toast]

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
