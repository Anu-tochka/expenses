<template>
  <div id="app">
    <header>
      Мои расходы
    </header>
    <main>
      <Button @show="showForm" />
      <PaymentForm @add="addNewPayment" />
      <PaymentList />
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
          
   },
	methods: { 
    addNewPayment (data) {
      this.paymentList.push(data)
    },
    showForm() {
      return 'true'
    }
   },
  mounted: {
    const links = document.querySelectorAll('a')
links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault()
    history.pushState({}, '', link.href) 
    this.$root.$emit('router-go')

  })
})

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
