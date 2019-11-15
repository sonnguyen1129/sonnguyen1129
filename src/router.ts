import Vue from 'vue'
import Router from 'vue-router'
import GuessName from '@/views/GuessName.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'guess-name',
      component: GuessName
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/listUser',
      name: 'list-user',
      component: () => import('@/views/user/ListUser.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/Login.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/admin/Admin.vue')
    },
    // {
    //   path: '/',
    //   name: 'taskList',
    //   component: () => import('./views/task/ListTask.vue')
    // },
    // {
    //   path: '/addTask',
    //   name: 'addTask',
    //   component: () => import('./views/task/TestTask.vue')
    // }
  ]
})
