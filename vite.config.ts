import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 配置插件 按需引入组件
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

const path = require('path')

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
    open: true,
    proxy: {
      // 选项写法
      '/vvhan': {
        target: 'https://api.vvhan.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/vvhan/, '')
      },
      '/uomg': {
        target: 'https://api.uomg.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/uomg/, '')
      },
      '/ajax/side/hotSearch': {
        target: 'https://weibo.com',
        changeOrigin: true
      }
    }
  },
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
