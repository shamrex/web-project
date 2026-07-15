<script setup>
import ScholarshipCard from './scholarshipCard.vue'

defineProps({
  hasSearched: Boolean,
  exactMatches: Array,
  closestMatches: Array
})
</script>

<template>
  <div v-if="hasSearched">
    <div v-if="exactMatches.length > 0">
      <h2>Scholarships You're Eligible For</h2>
      <div v-for="s in exactMatches" :key="s.id">
        <ScholarshipCard :scholarship="s" />
      </div>
    </div>

    <div v-else>
      <p class="no-match-msg">
        No exact scholarship match found for your details. Here are the closest options and what you'd need to qualify:
      </p>
      <div v-for="item in closestMatches" :key="item.scholarship.id">
        <ScholarshipCard :scholarship="item.scholarship" :gapMessage="item.gapMessage" />
      </div>
    </div>
  </div>
</template>



<style scoped>
.no-match-msg {
  text-align: center;
  font-weight: bold;
  margin: 20px auto;
  max-width: 420px;
  color: white;
  background: rgba(0,0,0,0.3);
  padding: 14px;
  border-radius: 8px;
}

h2 {
  text-align: center;
  color: white;
}
</style>