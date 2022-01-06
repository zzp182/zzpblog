import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Home from '@/components/pages/Home'
import Browse from '@/components/pages/Browse'
import Tool from '@/components/pages/Tool'
import Service from '@/components/pages/Service'
import Algorithm from '@/components/pages/Algorithm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect:'/pages/home',
      children:  [
        {
          name: 'home',
          path: '/pages/home',
          component: Home
        },
        {
          name: 'Browse',
          path: '/pages/Browse',
          component: Browse
        },
        {
          name: 'Tool',
          path: '/pages/Tool',
          component: Tool
        },
        {
          name: 'Service',
          path: '/pages/Service',
          component: Service
        },
        {
          name: 'Algorithm',
          path: '/pages/Algorithm',
          component: Algorithm
        }
      ]
    }
  ]
})
