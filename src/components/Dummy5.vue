<template lang="pug">
.hello
  v-container(fill-height grid-list-xl)
    v-layout(row wrap text-xs-center)
      v-flex(xs12 sm4 justify-space-around)
        h1
          v-icon(large) all_inclusive
        h2.mb-3 {{ msg }}
        img(src="../assets/shemp.jpg" width="200px")
        h3.mt-3 Another Howard Brother

      v-flex(xs12 md4 justify-space-around)
        h1
          v-icon(large) all_inclusive
        h2.mb-3 {{ msg }}
        img(src="../assets/shemp.jpg" width="200px")
        h3.mt-3 Another Howard Brother

      v-flex(xs12 md4 justify-space-around)
        h1
          v-icon(large) all_inclusive
        h2.mb-3 {{ msg }}
        img(src="../assets/shemp.jpg" width="200px")
        h3.mt-3 Another Howard Brother
</template>

<script>
export default {
  name: 'Farewell',
  data () {
    return {
      msg: 'Did Shemp Smoke Hemp?'
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
