import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from './api/axios'
import './assets/main.css'

const token = localStorage.getItem('token')
if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

const app = createApp(App)
app.use(router)
app.mount('#app')