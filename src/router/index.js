import { createRouter, createWebHistory } from 'vue-router'
import Master from '../views/Master.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'master',
      component: Master
    },
    {
      path: '/detailsProjects',
      name: 'detailsProject',
      component: () => import('../views/DetailsProjects/DetailsProject.vue')
    },
  ]
})

export default router
