import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResultsView from '../views/ResultsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/results', component: ResultsView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router