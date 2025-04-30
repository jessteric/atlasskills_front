<template>
  <div id="app" class="layout">
    <Header />
    <main class="content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './layouts/Header.vue'
import Footer from './layouts/Footer.vue'
</script>

<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  background: #f5f5f5;
  color: #333;
}
.content {
  flex: 1;
  padding: 2rem;
}
</style>