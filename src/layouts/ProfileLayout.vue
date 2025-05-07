<template>
  <div class="profile-layout">
    <Sidebar />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Sidebar from '@/layouts/Sidebar.vue'
</script>

<style scoped>
.profile-layout {
  display: flex;
}
.content {
  flex: 1;
  padding: 2rem;
}
</style>
