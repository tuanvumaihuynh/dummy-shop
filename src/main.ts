import './assets/main.css'
import 'notivue/notification.css'
import 'notivue/animations.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createNotivue } from 'notivue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)
app.use(createNotivue())

app.mount('#app')
