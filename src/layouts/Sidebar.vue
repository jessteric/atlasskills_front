<template>
  <aside class="sidebar">
    <ul>
      <li><router-link to="/profile">Profile</router-link></li>
      <li><router-link to="/profile/skills">Skills</router-link></li>
      <li><router-link to="/profile/certificates">Certificates</router-link></li>
      <li><router-link to="/profile/settings">Settings</router-link></li>
    </ul>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 220px;
  background: #f5f5f5;
  padding: 1.5rem;
  border-right: 1px solid #e0e0e0;
  height: 100vh;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 1rem;
}
a {
  text-decoration: none;
  color: #333;
}
</style>
