import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '@/views/dashboard/index.vue'
const router = createRouter({
  history:createWebHashHistory(),
  routes: [
    {
      path: '/',
      children:[
        {
          path: '',
          name: 'Dashboard',
          component: Dashboard,
          children:[
            {
              path:'',
              name:'home',
              component:()=>import('@/views/index/index.vue')
            },
            {
              path:'test',
              name:'test',
              component:()=>import('@/views/test/index.vue')
            }
          ]
        },
      ]
    },
  ]
})
export default router
