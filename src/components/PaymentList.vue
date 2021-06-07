<template>
  <div class="hello">
    
    <div class="table">
      <div class="row" v-for="(item, index) in items" v-bind:key="index">
        <div class="cell">{{items.id}}</div>
        <div class="cell">{{items.date}}</div>
        <div class="cell">{{items.category}}</div>
        <div class="cell">{{items.price}}</div>

        <div class="cell">
       <transition name="fade">
        <Menu
        v-if="Menu"
        :Menu="Menu"
        :menuSettings="menuSettings"
        />
           <button @click="$modal.hide()">Close</button></div>
           </transition>
      </div>
    </div>
    <!-- <Pagination v-bind:n=3 :cur="page" @paginate="onPaginate"> -->
  </div>
</template>

<script>
//import Pagination from 'Pagination.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'PaymentList',
  components: { 
//  ModalWindow: () => import('./components/Menu.vue'),
/*   Pagination
  },*/
   data(){
       return {
      Menu: '',
      menuSettings: {},    
   },
  methods: {
  /*  onPaginate(p) {
      this.page = p
    }*/ 
    onShown (settings) {
      this.Menu = settings.name
      this.menuSettings = settings
    },
    onHide () {
      this.Menu = ''
      this.menuSettings = {}
    },
  },
  computed: {
    ...mapGetters([
      'getPaymentList',
    ])
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.onShown)
    this.$modal.EventBus.$on('hide', this.onHide)
    this.category = this.$route.params.category
}, 
  props: {
    Menu: String,
    menuSettings: Object
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
 
.fade-enter, .fade-leave-to {
  opacity: 0;
  transition-timing-function: ease-in;
}

</style>
