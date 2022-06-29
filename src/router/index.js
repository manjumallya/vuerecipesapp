import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recipe/:idMeal',
    name: 'Recipe',
    component: () => import('../views/Recipe.vue')
  },
  {
    path: '/category',
    name: 'Categories',
    component: () => import('../views/Category.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
