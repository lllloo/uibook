import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'

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
      imports: [
        "vue", 
        "vue-router",
        {
          'class-variance-authority': [
            'cva'
          ]
        },
        {
          '@/js/baseService': [
            'baseGet', 'basePost'
          ],
        },
        {
          from: 'class-variance-authority',
          imports: ['VariantProps'],
          type: true,
        },
      ],
      dts: true,
      // eslintrc: {
      //   enabled: true,
      //   globalsPropValue: true,
      // },
    }),
    Components({
      dts: true,
      resolvers: [
        HeadlessUiResolver(),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
