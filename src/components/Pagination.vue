<template>
  <div class="hello">
    <button  v-for="i in n" :key="i" @click="go(i)">
      {{i}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    n: Number
  },
  methods: {
    go(p) {
      this.$emit('paginate', p)
    }
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
