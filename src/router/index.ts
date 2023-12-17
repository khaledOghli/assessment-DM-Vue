import { createRouter, createWebHistory } from 'vue-router'
import UserForm from '../views/UserForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'user form',
      component: UserForm
    },
    {
      path: '/success',
      name: 'success',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SuccessView.vue')
    }
  ]
})

export default router
