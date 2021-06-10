<template>
  <div class="hello" v-show="true">
    <input placeholder="Date" v-model="date" />
    <input placeholder="Category" v-model="category" />{{ $route.params.id }}
    <input placeholder="Price" v-model.number="price" />{{ $route.params.value }}
    <button @click="save">Save!</button>

  </div>
</template>

<script>
/*import { mapMutations } from 'vuex'*/
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
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
