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
          name: 'Home',
          component: Dashboard,
          children:[
            {
              path:'',
              name:'test',
              component:()=>import('@/views/test/index.vue')
            }
          ]
        },
        {
          path: 'login',
          name: 'login',
          component:()=>import('@/views/login/index.vue'),
        },
      ]
    },
  ]
})
export default router
