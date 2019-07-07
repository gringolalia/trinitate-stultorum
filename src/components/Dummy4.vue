<template lang="pug">
.hello
  v-container(fill-height grid-list-xl)
    v-layout(row wrap text-xs-center)
      v-flex(xs12 sm4 justify-space-around)
        h1 {{ msg }}
        img.my-3(src="../assets/larry.jpg" width="250px")
        h2 Yes, Larry Was Fine
      v-flex(xs12 sm4 justify-space-around)
        h1 {{ msg }}
        img.my-3(src="../assets/larry.jpg" width="250px")
        h2 Yes, Larry Was Fine
      v-flex(xs12 sm4 justify-space-around)
        h1 {{ msg }}
        img.my-3(src="../assets/larry.jpg" width="250px")
        h2 Yes, Larry Was Fine
        
</template>

<script>
export default {
  name: 'Farewell',
  data () {
    return {
      msg: 'Larry Was More Hairy'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
