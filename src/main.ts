import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/scss/global.scss'
import { createYmaps } from 'vue-yandex-maps'

const app = createApp(App)

app.use(router)
app.use(
  createYmaps({
    apikey: 'f6529273-9fab-4203-a4d2-f0972aa8dba7',
  }),
)

app.mount('#app')
