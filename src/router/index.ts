import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/#destaques',
    name: 'destaques',
    component: Home
  },
  {
    path: '/#lancamentos',
    name: 'lancamentos',
    component: Home
  },
  {
    path: '/#plataformas',
    name: 'plataformas',
    component: Home
  },
  {
    path: '/#publishers',
    name: 'publishers',
    component: Home
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
