import { createRouter, createWebHistory } from 'vue-router'
import Risk from '../views/Pdac.vue'

const routes = [
  {
    path: '/',
    redirect: '/pdac',
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/pdac',
    name: 'Pdac',
    component: () => import('../views/Pdac.vue')
  },
  {
    path: '/dcc',
    name: 'Dcc',
    component: () => import('../views/Dcc.vue')
  },
  {
    path: '/aac',
    name: 'Aac',
    component: () => import('../views/Aac.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
