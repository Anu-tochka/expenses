<template>
  <v-app>
    <v-app-bar app> 
    
    <div class="text-h5 text-sm-h3 mt-8 mb-8"> 
      Мои расходы
    </div> 
    </v-app-bar>
    <v-container>
   <v-row>
     <v-col> 
 <v-dialog v-model="dialog">
   <template v-slot:activator="{on}">
      <v-btn color="teal" dark v-on="on" @click="dialog=!dialog" >ADD NEW COST <v-icon>mdi-plus</v-icon></v-btn>
      <v-btn @click="dialog=false">Close</v-btn>	  
   </template>
   <v-card>
     <!-- FUTURE CONTENT --> 
   </v-card>
 </v-dialog>
      <PaymentForm @add="addNewPayment" />
      <PaymentList /></v-col>
     <v-col>
       <Diagram />
     </v-col>
   </v-row>
    </v-container>
      <router-view/>
  </v-app>
</template>
 
<script>
import PaymentList from './components/PaymentList.vue'
import PaymentForm from './components/PaymentForm.vue'/*
import Button from './components/Button.vue'
import HelloWorld from './components/HelloWorld.vue'*/
export default {
  name: 'App',
  components: {
   PaymentList,
   PaymentForm,
 /*  Button,
   HelloWorld,*/
   }, 
 data () {
   return {
     dialog: false,
   }
 },

	methods: { 
    addNewPayment (data) {
      this.paymentList.push(data)
    },
    showForm() {
      return 'true'
    },

   },
  mounted: {
/*    const links = document.querySelectorAll('a')
links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault()
    history.pushState({}, '', link.href) 
    this.$root.$emit('router-go')

  })
})*/

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
