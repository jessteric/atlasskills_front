<template>
  <div class="dashboard-container">
    <aside class="sidebar">
      <ul>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/skills">My Skills</router-link></li>
        <li><router-link to="/verification-tasks">Verification Tasks</router-link></li>
        <li><router-link to="/certificates">Certificates</router-link></li>
        <li><router-link to="/settings">Settings</router-link></li>
      </ul>
    </aside>
    <main class="dashboard-content">
      <router-view />
    </main>
  </div>
</template>

<style scoped src="../../assets/styles/profile.css"></style>