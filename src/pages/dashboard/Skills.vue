
<template>
  <div class="profile-container">
    <section class="main-content">
      <h2>Your skills</h2>

      <div class="filter">
        <label>Фильтр:</label>
        <select v-model="filter">
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="verified">Verified</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <ul class="skills-list">
        <li v-for="skill in filteredSkills" :key="skill.id">
          {{ skill.name }} — <strong>{{ skill.status }}</strong>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const filter = ref('all')
const skills = ref([])

onMounted(async () => {
  const response = await fetch('/api/skills', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  skills.value = await response.json()
})

const filteredSkills = computed(() => {
  if (filter.value === 'all') return skills.value
  return skills.value.filter(skill => skill.status === filter.value)
})
</script>

<style scoped src="../../assets/styles/profile.css"></style>
