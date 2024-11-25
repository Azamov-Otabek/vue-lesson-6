import { createRouter, createWebHistory } from 'vue-router'


export const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../layouts/dashboard-layout/index.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/dashboard/index.vue'),
      },
      {
        path: 'product',
        name: 'Product',
        component: () => import('../views/product/index.vue'),
      },
      {
        path: 'customers',
        name: 'Customers',
        component: () => import('../views/customers/index.vue'),
      },
      {
        path: 'income',
        name: 'Income',
        component: () => import('../views/income/index.vue'),
      },
      {
        path: 'promote',
        name: 'Promote',
        component: () => import('../views/promote/index.vue'),
      },
      {
        path: 'help',
        name: 'Help',
        component: () => import('../views/help/index.vue'),

      },   
    ],
  },  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
