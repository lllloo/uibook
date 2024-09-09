import '@/style/main.css'

import { createRouter, createWebHashHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import routes from '@/js/routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

async function enableMocking() {
  // @ts-ignore
  if (import.meta.env.MODE !== 'development') {
    return
  }
  const { worker } = await import('./mocks/browser')
  return worker.start()
}

const app = createApp(App)
app.use(router)
enableMocking().then(() => {
  app.mount('#app')
})
