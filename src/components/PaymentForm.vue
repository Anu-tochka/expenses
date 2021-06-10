<template>
  <v-card class="text-left pa-8" v-show="true">
    <v-text-field v-model="date" label="Date" name="date" ></v-text-field>
    <v-text-field v-model="category" label="Category" name="category" >{{ $route.params.id }}</v-text-field>
    <v-text-field v-model.number="amount" label="Value" name="price" >{{ $route.params.value }}</v-text-field>
    <v-btn @click="save">Save!</v-btn>

  </v-card>
</template>

<script>
/**/
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
       dialog: false,
     date: '',
     category: '',
      price: 0,
    }
  },
  computed: {
    getCurrentDate () {
      const today = new Date();
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }, 
    ...mapGetters([
      'getPaymentList',
    ])
  },

  methods: {
    save() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        price: this.price,
      }
      this.$emit('add', data)
    },
      
  },
  mounted () {
  this.$store.commit('setPaymentListData', this.fetchData())
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
