import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import ProfilePage from '../pages/ProfilePage.vue'
import SkillsPage from '../pages/SkillsPage.vue'
import AboutPage from '../pages/static/AboutPage.vue'
import HowItWorksPage from '../pages/static/HowItWorksPage.vue'

export default [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/how-it-works', component: HowItWorksPage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/profile', component: ProfilePage, meta: { requiresAuth: true } },
    { path: '/skills', component: SkillsPage, meta: { requiresAuth: true } },
]