import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import profile from '@/components/profile'
import works from '@/components/works'
import contact from '@/components/contact'
import sphome from '@/components/sphome'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/profile',
      component: profile
    },
    {
      path: '/works',
      component: works
    },
    {
      path: '/contact',
      component: contact
    },
    {
      path: '/sp',
      component: sphome
    }
  ]
})
