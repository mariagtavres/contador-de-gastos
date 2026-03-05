import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HistoryView from '../views/HistoryView.vue'
import RecurringView from '../views/RecurringView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/history', name: 'history', component: HistoryView },
  { path: '/recurring', name: 'recurring', component: RecurringView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
