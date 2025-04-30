import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, _, next) => {
    const token = localStorage.getItem('token')
    if (to.meta.requiresAuth && !token) return next('/login')
    if ((to.path === '/login' || to.path === '/register') && token) return next('/')
    next()
})

export default router