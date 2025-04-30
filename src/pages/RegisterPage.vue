<template>
  <div class="page-container">
    <div class="card">
      <h2>Register</h2>
      <input v-model="email" class="input" type="email" placeholder="Email" />
      <input v-model="password" class="input" type="password" placeholder="Password" />
      <button class="button" @click="register">Register</button>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../api/axios'

const email = ref('')
const password = ref('')
const error = ref(null)
const router = useRouter()

const register = async () => {
  try {
    const { data } = await api.post('/register', { email: email.value, name: name.value, password: password.value })
    localStorage.setItem('token', data.token)
    api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
    await router.push('/')
  } catch {
    error.value = 'Registration failed'
  }
}
</script>