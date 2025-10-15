import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Subjects from '../views/Subjects.vue'
import AdminSubject from '../views/admin/Subjects.vue'
import AdminWordds from '../views/admin/Words.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     { path: '/', name: 'Home', component: Home },
     { path: '/subjects', name: 'Subjects', component: Subjects },


    { path: '/admin/subjects', name: 'AddSubject', component: AdminSubject },
    { path: '/admin/subjects', name: 'AddSubject', component: AdminWordds },

  ],
})

export default router