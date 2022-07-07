import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 配置插件 按需引入组件
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  server: {
    // 在开发环境下启动时自动在浏览器中打开应用程序
    open: true
  }
})
