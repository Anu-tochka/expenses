import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

mount(PaymentList, {
  localVue,
  router
})

const $route = {
  path: '/add/payment/Transport?value=50'
}

const wrapper = mount(PaymentList, {
  mocks: {
    $route
  }
})

wrapper.vm.$route.path 