import { createRouter, createWebHistory } from 'vue-router'
import Risk from '../views/Risk.vue'

const routes = [
  {
    path: '/',
    redirect: '/risk',
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
    path: '/risk',
    name: 'Risk',
    component: () => import('../views/Risk.vue')
  },
  {
    path: '/dcc',
    name: 'Dcc',
    component: () => import('../views/Dcc.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
