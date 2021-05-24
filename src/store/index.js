import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: 
    {setPaymentListData (state, payload) {
    state.paymentList = payload
    },

  },
  getters: {
   // получаем список paymentsList
    getPaymentList: state => state.paymentList,
 
  // получаем суммарную стоимость всех платежей
    getFullPrice: state => {
    return state.paymentList
      .reduce((res, cur) => res + cur.price, 0)
    },
  },
  actions: { 
  fetchData ({ commit }) {
    return new Promise((resolve) => {
       // имитируем работу с сетью, ставим задержку получения данных в 1 секунду
       setTimeout(() => {
         resolve([
           { 
		   }
         ])
       }, 1000)
     })
       .then(res => {
         // запускаем изменение состояния через commit
         commit('setPaymentsListData', res)
       })
  },
  

  },
  modules: {
  }
})
