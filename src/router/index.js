import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import profile from '@/components/profile'
import works from '@/components/works'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/works',
      name: 'works',
      component: works
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
