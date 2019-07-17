<template lang="pug">
.hello
    v-container(fill-height grid-list-xl)
      v-layout(row, wrap text-xs-center)
        v-flex(xs12 md6 justify-space-around)
          h1 {{ msg }}
          h2 This Man Took the Place of Curly
          h1.mt-2
            i.fa.fa-gears.fa-5x

        v-flex(xs12 md6 justify-space-around)
          h1 {{ msg }}
          h2 This Man Took the Place of Curly
          h1.mt-2
            i.fa.fa-gears.fa-5x


        v-flex(xs12 md6 justify-space-around)
          h1 {{ msg }}
          h2 This Man Took the Place of Curly
          h1.mt-2
            i.fa.fa-gears.fa-5x

        v-flex(xs12 md6 justify-space-around)
          h1 {{ msg }}
          h2 This Man Took the Place of Curly
          h1.mt-2
            i.fa.fa-gears.fa-5x
</template>

<script>
export default {
  name: 'Farewell',
  data () {
    return {
      msg: 'Also Bald But Less Than Surly'
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
