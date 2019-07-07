<template lang="pug">
.hello
	v-container(fill-height grid-list-xl style="height: calc(100vh - 35px;")
		v-layout(row wrap text-xs-center)
			v-flex(xs12 justify-space-around)
				h1.display-2.my-2 {{ msg }}
				h2.display-1 Winter in San Pavlov
				h3.headline.mt-2 Triângulos Memoráveis na História
				img.mt-5(src='../assets/biohazard.svg', width='125px')
				p.mt-2
					v-btn.blue-grey.white--text.with.dignity(large="" to="/x-file" exact)
						v-icon share
						| &nbsp; De Trinitatibus
</template>

<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
			msg: 'Bom Dia, Meia-Noite'
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
.primary {
	blackground-color: #607D8B;
}
</style>
