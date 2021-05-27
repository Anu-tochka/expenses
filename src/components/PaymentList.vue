<template>
  <div class="hello">
    
    <div class="table">
      <div class="row" v-for="(item, index) in items" v-bind:key="index">
     {{items}}</div>
    </div>
    <!-- <Pagination v-bind:n=3 :cur="page" @paginate="onPaginate"> -->
  </div>
</template>

<script>
//import Pagination from 'Pagination.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'PaymentList',
/*  components: {
   Pagination
  },*/
  methods: {
  /*  onPaginate(p) {
      this.page = p
    }*/
  },
  computed: {
    ...mapGetters([
      'getPaymentList',
    ])
  },
  

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
