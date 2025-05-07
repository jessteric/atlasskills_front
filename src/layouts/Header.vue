<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="logo">AtlasSkills</router-link>
      <nav class="nav">
        <router-link to="/about">About</router-link>
        <router-link to="/how-it-works">How it works</router-link>
        <template v-if="!isAuth">
          <router-link to="/login">Sign In</router-link>
          <router-link to="/register">Sign Up</router-link>
        </template>
        <template v-else>
          <span>{{ user?.email }}</span>
          <router-link to="/profile">Profile</router-link>
          <button @click="logout" class="ml-2 text-red-500">Logout</button>
        </template>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { computed } from 'vue'

const authStore = useAuthStore()
const isAuth = computed(() => authStore.isAuthenticated)
const user = computed(() => authStore.user)

function logout() {
  authStore.logout()
}
</script>

<style scoped>
.header {
  background: #fff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav > * {
  margin-left: 1rem;
  text-decoration: none;
  color: #333;
}
.logo {
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
