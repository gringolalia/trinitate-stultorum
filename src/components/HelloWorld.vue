<template lang="pug">
	v-container.mt-5(fill-height grid-list-xl)
		v-layout(row wrap justify-content="center" align-items="center")
			v-flex(text-xs-center)
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
<style >
v-container {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
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
