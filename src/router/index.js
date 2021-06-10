import Vue from 'vue'
import VueRouter from 'vue-router'
import PaymentForm from '../components/PaymentForm.vue'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/add/payment/:category',
    name: 'PaymentForm',
    component: PaymentForm,
	props: { value: 0 }
  },
  {
    path: '*',
    name: 'notfound',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HelloWorld
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
