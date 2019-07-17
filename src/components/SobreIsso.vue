<template lang="pug">
.hello
	v-container(fill-height grid-list-xl style="height: calc(100vh - 35px;")
		v-layout(justify-center align-center)
			v-flex(text-xs-center)
				h1.display-2.my-2 Quem Fez in Media Res?
				h2.display-1 O Gran Bretônio Pandemônio
				h3.headline.mt-2 Ao Vivo da Vila Beatriz
				img.mt-3(src='../assets/biohazard.svg', width='125px')
				p
					v-btn.blue-grey.white--text.with.dignity.mt-3(large to="/sobre-aquilo")
						v-icon group
						| &nbsp; De Quem a Culpa?
</template>

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
