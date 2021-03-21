import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }, 
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    // route parameter
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails
  }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

]

const router = createRouter({
  // browser can return to previous routes using history, sets base URL, includes routes
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// exports const router with routes
export default router
