import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', name: 'login', component: () => import('../views/LoginView.vue')},
    { path: '/register', name: 'register', component: () => import('../views/RegisterView.vue')},
    { path: '/', name: 'home', component: () => import('../views/HomeView.vue')},
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue')},
    { path: '/services', name: 'services', component: () => import('../views/ServicesView.vue')},
    { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue')},
    { path: '/admin', name: 'admin', component: () => import('../views/AdminView.vue')},
    { path: '/user', name: 'user', component: () => import('../views/UserView.vue')},
    { path: '/projects', name: 'profile', component: () => import('../views/ProjectsView.vue')}

  ]
})

export default router
