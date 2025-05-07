import { createRouter, createWebHistory } from 'vue-router'

// Публичные страницы
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/static/AboutPage.vue'
import HowItWorksPage from '@/pages/static/HowItWorksPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'

// Личный кабинет и лейаут
import ProfileLayout from '@/layouts/ProfileLayout.vue'
import ProfilePage from '@/pages/dashboard/Profile.vue'
import SkillsPage from '@/pages/dashboard/Skills.vue'
import SettingsPage from '@/pages/dashboard/Settings.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/how-it-works', component: HowItWorksPage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },

    {
        path: '/profile',
        component: ProfileLayout,
        meta: { requiresAuth: true },
        children: [
            { path: '', component: ProfilePage },
            { path: 'skills', component: SkillsPage },
            { path: 'settings', component: SettingsPage }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, _, next) => {
    const token = localStorage.getItem('token')
    if (to.meta.requiresAuth && !token) return next('/login')
    if ((to.path === '/login' || to.path === '/register') && token) return next('/')
    next()
})

export default router
