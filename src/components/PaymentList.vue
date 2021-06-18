<template>
  
   <v-row>
     <v-col :cols="1">#</v-col>
     <v-col :cols="4">Date</v-col>
     <v-col :cols="4">Category</v-col>
     <v-col :cols="2">Value</v-col>
     <v-col :cols="1"> ... </v-col>
   </v-row>

      <v-row v-for="(item, index) in items" v-bind:key="index">
        <v-col class="cell">{{index}}</v-col>
        <v-col class="cell">{{items.date}}</v-col>
        <v-col class="cell">{{items.category}}</v-col>
        <v-col class="cell">{{items.price}}</v-col>

        <v-col class="cell">
       <transition name="fade">
        <Menu
        v-if="Menu"
        :Menu="Menu"
        :menuSettings="menuSettings"
        />
           <button @click="$modal.hide()">Close</button>
           </transition></v-col>
      </v-row>
    <v-row>
     <Pagination v-bind:n=3 :cur="page" @paginate="onPaginate"> 
  </v-row>
</template>

<script>
import Menu from '../plugins/Menu'
import Pagination from './Pagination'
/*import { mapMutations } from 'vuex'*/
import { mapGetters, mapActions } from 'vuex'
import { Bar } from 'vue-chartjs'
export default {
  name: 'PaymentList',
  components: { 
  ModalWindow: () => import('./plugins/Menu/index.js'),
   Pagination
  },
   data(){
       return {
      date: '',
      category: '',
      price: 0,
       Menu: '',
       menuSettings: {}
       }  
   },
  methods: {
    ...mapActions({
	fetchListData: 'fetchData'
	}),
    onPaginate(p) {
      this.page = 'page'+p
    this.fetchListData('page'+p)
    }, 
    onShown (settings) {
      this.Menu = settings.name
      this.menuSettings = settings
    },
    onHide () {
      this.Menu = ''
      this.menuSettings = {}
    },
    /*  fetchData() {
     return [ 
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
    },*/
  },
	/*		created() {
			//fetch(`https://github.com/Anu-tochka/expenses/blob/Vuex/data.json`)
			fetch(`../data.json`)
			.then( function(response) {
				this.items = response.data
			})
			
		},*/
  computed: {
    ...mapGetters([
      'getPaymentList',
    ])
  }, 
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  extends: Bar,
  mounted () {
    this.fetchListData(this.page)
    this.category = this.$route.params.category
    this.renderChart(this.chartdata, this.options)
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
