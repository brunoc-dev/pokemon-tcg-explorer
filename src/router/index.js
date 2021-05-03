import Vue from 'vue'
import VueRouter from 'vue-router'
import CardExplorer from '../views/CardExplorer.vue'
import CardDetails from '../views/CardDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CardExplorer',
    component: CardExplorer
  },

  {
    path: '/card-details/:id',
    name: 'card-details',
    component: CardDetails,
    props: route => ({ id: route.params.id })
  }
]

const router = new VueRouter({
  routes
})

export default router
