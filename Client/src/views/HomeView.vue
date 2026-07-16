<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios'
import ScholarshipForm from '../Components/scholarshipForm.vue'
import { exactMatches, closestMatches, searchPerformed } from '../store.js'

const router = useRouter()
const incomeOrder = { low: 1, medium: 2, high: 3 }

const nextLevelMap = {
  matric: 'intermediate',
  intermediate: 'bachelors',
  bachelors: 'masters',
  masters: 'phd'
}

function checkCriteria(user, s) {
  const levelOk = s.levels.includes('any') || s.levels.includes(user.eligibleLevel)
  const fieldOk = s.fields.includes('any') || s.fields.includes(user.fieldOfStudy)
  const incomeOk = incomeOrder[user.incomeLevel] <= incomeOrder[s.maxIncomeLevel]
  const gpaOk = user.gpa >= s.minGPA
  return { levelOk, fieldOk, incomeOk, gpaOk }
}

function buildGapMessage(checks, s) {
  const issues = []
  if (!checks.levelOk) issues.push(`requires education level: ${s.levels.join(' or ')}`)
  if (!checks.fieldOk) issues.push(`requires field: ${s.fields.join(' or ')}`)
  if (!checks.incomeOk) issues.push(`requires household income level: ${s.maxIncomeLevel} or below`)
  if (!checks.gpaOk) issues.push(`requires GPA/percentage of at least ${s.minGPA}`)
  return 'You don\'t meet: ' + issues.join('; ')
}

async function handleSearch(userDetails) {
  searchPerformed.value = true
  exactMatches.value = []
  closestMatches.value = []

  // Fetch scholarships from Express API instead of local JSON
const { data: scholarships } = await axios.get(`${import.meta.env.VITE_API_URL}/api/scholarships`)
  const eligibleLevel = nextLevelMap[userDetails.educationLevel]  
  const gpaPercentage = (userDetails.gpa / 4) * 100

  const scored = scholarships.map(s => {
    const checks = checkCriteria({ ...userDetails, eligibleLevel, gpa: gpaPercentage }, s)
    const matchCount = Object.values(checks).filter(Boolean).length
    return { scholarship: s, checks, matchCount }
  })

  const exact = scored.filter(item => item.matchCount === 4)

  if (exact.length > 0) {
    exactMatches.value = exact.map(item => item.scholarship)
  } else {
    const sorted = scored.sort((a, b) => b.matchCount - a.matchCount)
    closestMatches.value = sorted.slice(0, 3).map(item => ({
      scholarship: item.scholarship,
      gapMessage: buildGapMessage(item.checks, item.scholarship)
    }))
  }

  router.push('/results')
}
</script>

<template>
 
  <ScholarshipForm @submit-details="handleSearch" />
</template>