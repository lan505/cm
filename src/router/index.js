import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/portal/Login'
import Index from '@/components/layout/Index'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Login',
      component: Login
    }, {
        path: '/Index',
        name: 'Index',
        component: Index
      }
  ]
})
