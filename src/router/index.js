import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
}
Vue.use(VueRouter)
import Layout from '@/components/layout/index.vue'
const routes = [
  {
    path: '/',
    redirect: '/login',
    name:'login',
    component:Layout,
    children:[
        {
            path:'/death',
            component: () => import('@/views/life-death/index.vue'),
        },
        {
            path: '/home',
            component: () => import('@/views/home/index.vue'),
        },
        {
            path: '/test',
            component: () => import('@/components/test.vue'),
        },
    ]
  },
  {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
