<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <span class="logo">🎓 Scholarship Finder</span>
    <div class="nav-links">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/results" class="nav-link">Results</RouterLink>
    </div>
  </nav>
  <p class="tagline">Find the scholarship that finds you.</p>
  <RouterView />
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 30px;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(6px);
}
.logo {
  color: white;
  font-weight: 700;
  font-size: 1.3em;
}
.nav-links {
  display: flex;
  gap: 20px;
}
.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 6px 14px;
  border-radius: 6px;
  transition: background 0.2s ease;
}
.nav-link:hover {
  background: rgba(255,255,255,0.15);
}
.router-link-active {
  background: rgba(255,255,255,0.25);
}
.tagline {
  text-align: center;
  color: #d6e4ff;
  font-style: italic;
  margin: 10px 0 0;
}
</style>