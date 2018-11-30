import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import apps from '@/components/application/apps'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/apps',
      component: apps
    }
  ]
})
