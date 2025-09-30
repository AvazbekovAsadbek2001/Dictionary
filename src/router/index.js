import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Subjects from '../views/Subjects.vue'
import AddSubject from '../views/AddSubject.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     { path: '/', name: 'Home', component: Home },
     { path: '/subjects', name: 'Subjects', component: Subjects },
     { path: '/subjects/add', name: 'AddSubject', component: AddSubject },
  ],
})

export default router
