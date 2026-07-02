<script setup>
defineProps({
  scholarship: { type: Object, required: true },
  gapMessage: { type: String, default: '' }
})
</script>

<template>
  <div class="card">
    <h3>{{ scholarship.name }}</h3>
    <p><strong>Country:</strong> {{ scholarship.country }}</p>
    <p><strong>Type:</strong> {{ scholarship.type }}</p>
    <p><strong>Deadline:</strong> {{ scholarship.deadline }}</p>
    <p v-if="gapMessage" class="gap">⚠ {{ gapMessage }}</p>
    <a :href="scholarship.link" target="_blank">Visit Website →</a>
  </div>
</template>

<style scoped>
.card {
  border: none;
  border-radius: 10px;
  padding: 18px;
  margin: 12px auto;
  max-width: 420px;
  background: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.25);
}

.card h3 {
  margin-top: 0;
  color: #1e3c72;
}

.gap {
  color: #b35900;
  background: #fff3e0;
  padding: 6px;
  border-radius: 6px;
  font-size: 0.88em;
}

.card a {
  display: inline-block;
  margin-top: 10px;
  padding: 6px 14px;
  background: #2a5298;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.9em;
  transition: background 0.2s ease;
}

.card a:hover {
  background: #1e3c72;
}
</style>