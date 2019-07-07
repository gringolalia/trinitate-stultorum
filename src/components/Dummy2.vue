<template lang="pug">
.hello
  v-container(fill-height="" grid-list-xl="true")
    v-layout(row="", wrap="" text-xs-center="")
      v-flex(xs12='' sm4='' justify-space-around)
        h1 {{ msg }}
        h3 &mdash; Homer J. Simpson
        img.my-3(src="../assets/moefuriousanger.jpg" width="175px")

        h2.mt-3 Spread Out!

      v-flex(xs12='' sm4='' justify-space-around)
        h1 {{ msg }}
        h3 &mdash; Homer J. Simpson
        img.my-3(src="../assets/moefuriousanger.jpg" width="175px")

        h2.mt-3 Spread Out!

      v-flex(xs12='' sm4='' justify-space-around)
        h1 {{ msg }}
        h3 &mdash; Homer J. Simpson
        img.my-3(src="../assets/moefuriousanger.jpg" width="175px")

        h2.mt-3 Spread Out!

      v-flex(xs12='' sm4='' justify-space-around)
        h1 {{ msg }}
        h3 &mdash; Homer J. Simpson
        img.my-3(src="../assets/moefuriousanger.jpg" width="175px")

        h2.mt-3 Spread Out!

      v-flex(xs12='' sm4='' justify-space-around)
        h1 {{ msg }}
        h3 &mdash; Homer J. Simpson
        img.my-3(src="../assets/moefuriousanger.jpg" width="175px")

        h2.mt-3 Spread Out!

      v-flex(xs12='' sm4='' justify-space-around)
        h1 {{ msg }}
        h3 &mdash; Homer J. Simpson
        img.my-3(src="../assets/moefuriousanger.jpg" width="175px")

        h2.mt-3 Spread Out!
</template>

<script>
export default {
  name: 'Adeus',
  data () {
    return {
      msg: 'Moe Is Their Leader'
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
