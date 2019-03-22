import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/Home.vue"
const About = () => import('../views/About.vue')
const Service = () => import('../views/Service.vue')
const Solution = () => import('../views/Solution.vue') // 解决方案

// const Home = () => import('../views/Home.vue')

// import About from "../views/About.vue"
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component:About
    },
    {
      path: '/service',
      name: 'Service',
      component:Service
    },
    {
      path: '/solution',
      name: 'Solution',
      component:Solution
    },

  ]
})
