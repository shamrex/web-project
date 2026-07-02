<script setup>
import ScholarshipResults from '../Components/scholarshipResults.vue'
import { exactMatches, closestMatches, searchPerformed } from '../store.js'
</script>

<template>
  <h1 style="text-align:center">Your Matches</h1>
  <ScholarshipResults
    :hasSearched="searchPerformed"
    :exactMatches="exactMatches"
    :closestMatches="closestMatches"
  />
  <div style="text-align:center; margin-top:20px;">
    <RouterLink to="/">
      <button>← Search Again</button>
    </RouterLink>
  </div>
  
</template>