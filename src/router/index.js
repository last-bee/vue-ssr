import Vue from 'vue'

import Router from 'vue-router'

Vue.use(Router)


export default () => {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/login',
        component: () => import(/* webpackChunkName: "com-login" */ '@/views/login')
      },
      {
        path: '/home',
        component: () => import(/* webpackChunkName: "com-home" */ '@/views/home')
      },
      {
        path: '/shopping',
        component: () => import(/* webpackChunkName: "com-shopping" */ '@/views/shopping')
      },
      {
        path: '/user',
        component: () => import(/* webpackChunkName: "com-user" */ '@/views/user')
      }
    ]
  })
}