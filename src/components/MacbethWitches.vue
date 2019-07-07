<template lang="pug">
.hello
  v-container(grid-list-xl text-xs-center)
    v-layout(row wrap)
      v-flex(xs12 align-center justify-center)
        h1.display-1.my-2 Sobre Pobres e Nobres
        h3.display-2 O Superusuário é Sambojano
        h3.headline.mt-2 Ao Vivo da Vila Beatriz
        img.my-3(src='../assets/hammer-sickle.svg', width='125px')
        p.my-2
          v-btn.blue-grey.white--text.with.dignity.mt-2(large to="/sobre-isso")
            v-icon group
            | &nbsp; Pobres &amp; Nobres


  v-container(fluid grid-list-md)
    v-layout(row wrap)

      v-flex(d-flex xs12 sm6 md4)
        v-card.pa-3(color='blue-grey', dark)
          v-card-title.title.with.dignity(primary)
            i.fa.fa-archway.fa.lg.mr-2
            | Lorem

          v-card-text {{ lorem }}

      v-flex(d-flex xs12 sm6 md3)
        v-layout(row wrap)
          v-flex(d-flex)
            v-card.pa-3(color='grey lighten-2' light)
              v-card-title.title.with.dignity(primary)
                i.fa.fa-archway.fa.lg.mr-2
                | Forum
              v-card-text {{ lorem.slice(0, 70) }}

          v-flex(d-flex)
            v-layout(row wrap)
              v-flex(v-for='n in 2', :key='n', d-flex xs12)
                v-card.pa-3(color='red lighten-2', dark)
                  v-card-title.title.with.dignity(primary)
                    i.fa.fa-archway.fa.lg.mr-2
                    | Quorum
                  v-card-text {{ lorem.slice(0, 40) }}

      v-flex(d-flex xs12 sm6 md2 child-flex)
        v-card.pa-3(color='yellow lighten-4' light)
          v-card-title.title.with.dignity(primary)
            i.fa.fa-archway.fa.lg.mr-2
            | Procul
          v-card-text {{ lorem.slice(0, 90) }}

      v-flex(d-flex xs12 sm6 md3)
        v-card.pa-3(color='black' dark)
          v-card-title.title.with.dignity(primary)
            i.fa.fa-archway.fa.lg.mr-2
            | Harum
          v-card-text {{ lorem.slice(0, 100) }}
</template>


<script>
  export default {
    data: () => ({
      lorem: `Φαβθλασ οπορτεατ ρεπρεηενδθντ cθμ ει. Ιν ασσθμ cονγθε δοcενδι qθι, vιξ ετ ιμπετθσ θτροqθε δολορεμ. Ει qθισ αλιqθιπ προδεσσετ vιξ. Qθι ερρορ σεμπερ απειριαν νε, εστ τε λαβορε δοcτθσ νεcεσσιτατιβθσ. Ρεqθε σcριπτα νε vιξ, μελ αδ μθνδι cονσεqθατ δεφινιτιονεσ, νεc ποσσε ιισqθε vολθμθσ αν.`
    })
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

v-card {
  font-family: 'News Cycle', sans-serif;
  font-weight: 300;
}
</style>
