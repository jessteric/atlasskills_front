<template>
  <div class="page-container">
    <div class="card">
      <h2>Profile</h2>
      <input v-model="profile.email" class="input" placeholder="E-Mail" />
      <input v-model="profile.name" class="input" placeholder="Name" />
      <input v-model="profile.phone" class="input" placeholder="Phone" />
      <input v-model="profile.address" class="input" placeholder="Address" />
      <button class="button" @click="save">Save Profile</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../api/axios'

const profile = ref({ name: '', phone: '', address: '', email: '' })
const error = ref(null)

onMounted(async () => {
  try {
    const { data } = await api.get('/me')
    profile.value = data
  } catch {
    error.value = 'Failed to load profile'
  }
})

const save = async () => {
  try {
    await api.put('/profile', profile.value)
    alert('Profile saved')
  } catch {
    error.value = 'Save failed'
  }
}
</script>