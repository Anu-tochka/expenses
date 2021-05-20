<template>
  <div id="app">
    <header>
      Мои расходы
    </header>
    <main>
      <Button @show="showForm" />
      <PaymentForm @add="addNewPayment" />
      <PaymentList :items="paymentList" />
    </main>
    <router-view/>
  </div>
</template>
 
<script>
import PaymentList from './components/PaymentList.vue'
import PaymentForm from './components/PaymentForm.vue'
import Button from './components/Button.vue'
export default {
  name: 'App',
  components: {
   PaymentList,
   PaymentForm,
   Button
  },
   data(){
       return {
           paymentList: [ 
             {
               date: '28.03.2020',
        category: 'Food',
        price: 169,
      },
      {
        date: '24.03.2020',
        category: 'Transport',
        price: 360,
      },
      {
        date: '24.03.2020',
        category: 'Food',
        price: 532,
      }]

       }   
   },
	methods: { 
    addNewPayment (data) {
      this.paymentList.push(data)
    },
    showForm() {
      return 'true'
    }
   },
}

</script>

<style lang="scss" module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  padding: 30px;
  font-weight: bold;
  color: #2c3e50;

  /*
      color: #42b983;
  */
}
</style>
