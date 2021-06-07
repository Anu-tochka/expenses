import { mount } from '@vue/test-utils'
import PaymentForm from './src/components/PaymentForm'
 
describe('PaymentForm', () => {
 test('Test date input value', async () => {
   const wrapper = mount(App)
 
   const dateInput = wrapper.find('input[name=date]')
   dateInput.setValue('10.05.2021')
 
   expect(wrapper.vm.date).toBe('10.05.2021')
 })
 }),
 test('Test price input value', async () => {
   const wrapper = mount(App)
 
   const priceInput = wrapper.find('input[name=price]')
   priceInput.setValue(1000)
 
   expect(wrapper.vm.price).toBe(1000)
 }),
 test('Test category input value', async () => {
   const wrapper = mount(App)
 
   const categoryInput = wrapper.find('input[name=category]')
   categoryInput.setValue('Food')
 
   expect(wrapper.vm.category).toBe('Food')
 })
})

jest.mock('fetch', () => ({
  get: Promise.resolve({ data: { "id": 10, "date": "20.05.2021", "category": "Food", "price": 269 } })
}))

it('делает асинхронный запрос при нажатии кнопки', done => {
  const wrapper = mount(PaymentForm)
  wrapper.find('button').trigger('click')
  expect(wrapper.vm.value).toBe({ "id": 10, "date": "20.05.2021", "category": "Food", "price": 269 })
})