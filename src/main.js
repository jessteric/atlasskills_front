import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from './api/axios'
import './assets/main.css'
import { createPinia } from 'pinia'

const token = localStorage.getItem('token')
if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.mount('#app')