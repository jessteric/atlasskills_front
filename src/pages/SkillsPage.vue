<template>
  <div class="page-container">
    <div class="card">
      <h2>Manage Skills</h2>
      <div class="flex mb-4">
        <input v-model="newSkill" class="input flex-grow" placeholder="Add Skill" />
        <button class="button ml-2" @click="addSkill">Add</button>
      </div>
      <ul>
        <li v-for="skill in skills" :key="skill.id" class="flex justify-between items-center mb-2">
          {{ skill.name }}
          <button class="button small" @click="removeSkill(skill.id)">Remove</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../api/axios'

const skills = ref([])
const newSkill = ref('')

onMounted(async () => {
  try {
    const { data } = await api.get('/skills')
    skills.value = data
  } catch {
    // handle error
  }
})

const addSkill = async () => {
  if (!newSkill.value) return
  try {
    const { data } = await api.post('/skills', { name: newSkill.value, level: 'beginner' })
    skills.value.push(data)
    newSkill.value = ''
  } catch {
    // handle error
  }
}

const removeSkill = async (id) => {
  try {
    await api.delete(`/skills/${id}`)
    skills.value = skills.value.filter(s => s.id !== id)
  } catch {
    // handle error
  }
}
</script>