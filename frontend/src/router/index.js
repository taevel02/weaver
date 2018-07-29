import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Main from '@/components/Main'
import Donate from '@/components/Donate'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/donate',
      name: 'donate',
      component: Donate
    }
  ]
})