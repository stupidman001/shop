import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index/index.vue'),
    meta: {
      showTabbar: true,
    },
  },
  {
    path: '/publish',
    name: 'Publish',
    component: () => import('../views/publish/publish.vue'),
    meta: {
      showTabbar: true,
    },
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/mine/mine.vue'),
    meta: {
      showTabbar: true,
    },
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
