import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 在开发环境下启动时自动在浏览器中打开应用程序
    open: true
  }
})
