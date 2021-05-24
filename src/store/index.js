import Vue from 'vue'
import Vuex from 'vuex'
//import App from '../App.vue'

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
    //new Promise((resolve) => {
       fetch('https://github.com/Anu-tochka/expenses/blob/Vuex/data.json') 
       .then(response =>  response.json())
       .then(page1 => {return commit('setPaymentsListData',page1)});
     }
    /*   .then(resolve => {
         // запускаем изменение состояния через commit
         commit('setPaymentsListData', response.json())
       })*/
  },
  

  
})
