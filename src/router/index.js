import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/LoggingView.vue')
    },
    {
      path: '/:username',
      name: 'films',

      component: () => import('../views/PeliculasView.vue')
    }
  ]
})

export default router
