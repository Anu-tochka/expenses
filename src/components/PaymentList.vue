<template>
  <div class="hello">
    
  <div class="table">
      <div class="row" v-for="(item, index) in items" v-bind:key="index">
     {{items}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentList',
  props: {
  items: {
    type: Array,
    default: () => []
  }
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
