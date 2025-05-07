<template>
  <div class="dashboard-layout">
    <aside class="sidebar">
      <nav>
        <RouterLink to="/dashboard/profile">Профиль</RouterLink>
        <RouterLink to="/dashboard/skills">Скиллы</RouterLink>
        <RouterLink to="/dashboard/tasks">Задания</RouterLink>
        <RouterLink to="/dashboard/certificates">Сертификаты</RouterLink>
        <RouterLink to="/dashboard/settings">Настройки</RouterLink>
      </nav>
    </aside>
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.dashboard-layout {
  display: flex;
  min-height: 100vh;
}
.sidebar {
  width: 220px;
  background: #f3f3f3;
  padding: 1rem;
}
.content {
  flex-grow: 1;
  padding: 2rem;
}
</style>