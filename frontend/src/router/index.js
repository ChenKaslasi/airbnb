import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/home-page.vue'
import spaceList from '../views/space-list.vue'
import spaceDetails from '../views/space-details.vue'
import hostPage from '../views/host-page.vue'
import hostDashboard from '../views/host-dashboard.vue'

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: homePage
//   },
//   {
//     path: '/host',
//     name: 'host',
//     component: hostPage,
//   },
//   {
//     path: '/:city',
//     component: spaceList,
//   },
//   {
//     path: '/:city/:id',
//     component: spaceDetails,
//   },
// ]



const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: homePage
    },
    {
      path: '/host',
      name: 'host',
      component: hostPage,
    },
    {
      path: '/host-dashboard',
      name: 'host-dashboard',
      component: hostDashboard,
    },

    {
      path: '/:city',
      component: spaceList,
    },
    {
      path: '/:city/:id',
      component: spaceDetails,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
