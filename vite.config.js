import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/style/main.scss";',
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
      eslintrc: {
        enabled: true,
        globalsPropValue: true,
      },
    }),
    Components({}),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
