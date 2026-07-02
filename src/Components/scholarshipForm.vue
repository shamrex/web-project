<script setup>
import { ref } from 'vue'

const emit = defineEmits(['submit-details'])

const educationLevel = ref('bachelors')
const fieldOfStudy = ref('any')
const incomeLevel = ref('medium')
const gpa = ref()

function handleSubmit() {
  emit('submit-details', {
    educationLevel: educationLevel.value,
    fieldOfStudy: fieldOfStudy.value,
    incomeLevel: incomeLevel.value,
    gpa: Number(gpa.value)
  })
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label>Education Level:</label>
    <select v-model="educationLevel">
      <option value="matric">Matric</option>
      <option value="intermediate">Intermediate</option>
      <option value="bachelors">Bachelors</option>
      <option value="masters">Masters</option>
          </select>

    <label>Field of Study:</label>
    <select v-model="fieldOfStudy">
      <option value="any">Any</option>
      <option value="engineering">Engineering</option>
      <option value="computerscience">Computer Science</option>
      <option value="medical">Medical</option>
      <option value="business">Business</option>
      <option value="arts">Arts</option>
    </select>

    <label>Household Income Level:</label>
    <select v-model="incomeLevel">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>

    <label>GPA (out of 4.0):</label>
<input type="number" v-model="gpa" min="0" max="4" step="0.01" placeholder="e.g. 3.5" />

    <button type="submit">Find Scholarships</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 420px;
  margin: 20px auto;
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

label {
  font-weight: 600;
  color: #2a5298;
}

select, input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s ease;
}

select:focus, input:focus {
  border-color: #2a5298;
  outline: none;
}

button {
  padding: 10px;
  margin-top: 10px;
  background: #2a5298;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
}

button:hover {
  background: #1e3c72;
  transform: translateY(-2px);
}
</style>