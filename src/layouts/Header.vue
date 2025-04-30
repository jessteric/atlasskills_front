<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/" class="nav-link">Main</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/how-it-works" class="nav-link">How it works</router-link>
    </nav>
    <div class="auth">
      <template v-if="isAuthenticated">
        <span class="nav-link">👤 {{ userName }}</span>
        <button class="nav-link button-link" @click="logout">Logout</button>
      </template>
      <template v-else>
        <router-link to="/login" class="nav-link">Sign In</router-link>
        <router-link to="/register" class="nav-link">Sign Up</router-link>
      </template>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const token = ref(localStorage.getItem('token'))
const isAuthenticated = computed(() => !!token.value)
const userName = ref('User')
const router = useRouter()

const logout = () => {
  localStorage.removeItem('token')
  token.value = null
  router.push('/login')
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.nav, .auth { display: flex; align-items: center; }
.nav-link { margin-right: 1rem; text-decoration: none; color: #333; font-weight: 500; }
.button-link { background: none; border: none; cursor: pointer; padding: 0; }
</style>