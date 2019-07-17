<template lang="pug">
v-app(light)
	v-navigation-drawer(fixed='true' :mini-variant='miniVariant' :clipped='clipped' v-model='drawer' app)

		v-toolbar(raised elevation="8")
			v-list.pa-0
				v-list-tile(avatar)
					v-list-tile-avatar
						i.fas.fa-gears.fa-2x
					v-list-tile-content
						v-list-tile-title.dignity The Ant Irony Bloc
		v-list(@click.native.stop="drawer = !drawer")
			v-list-tile(v-for='(item, i) in items', :key='i', value='true', :to='item.url', active-class="active", exact="")
				v-list-tile-action
					v-icon(light, v-html='item.icon')

				v-list-tile-content
					v-list-tile-title(v-text='item.title')

	v-toolbar(app fixed='true')
		v-toolbar-side-icon(@click.stop='drawer = !drawer')

		v-btn(icon, @click.stop='miniVariant = !miniVariant')
			v-icon(v-html="miniVariant ? 'chevron_right' : 'chevron_left'")

		v-btn(icon, @click.stop='clipped = !clipped')
			v-icon rowing

		v-btn(icon, @click.stop='fixed = !fixed')
			v-icon directions_train
		v-icon.mr-1(large="") fas fa-gears
		v-toolbar-title.dignity.ml-2(v-text='title')

		v-spacer

	v-content
		v-container(fluid)
			v-slide-y-transition(mode='out-in')
				router-view

	v-footer(:fixed='fixed', app)
		span
			v-icon(large) beach_access
			| &nbsp; Cloned in Sambodia 2018 by the Gran Bretônio
</template>

<script>
	export default {
		data () {
			return {
				clipped: false,
				drawer: false,
				fixed: false,
				items: [
					{
						icon: 'all_inclusive',
						title: 'Trinities in General',
						url: '/'
					},
					{
						icon: 'fastfood',
						title: 'De Stultibus',
						url: '/x-file'
					},
					{
						icon: 'beach_access',
						title: 'Sobre um Pobre',
						url: '/sobre-isso'
					},
					{
						icon: 'wb_sunny',
						title: 'Sobre um Nobre',
						url: '/sobre-aquilo'
					}
				],
				miniVariant: false,
				right: true,
				rightDrawer: false,
				title: 'Engenho Novo LLC'
			}
		}
	}
</script>

<style>

.primary {
	color: white;
	background-color: #6699cc;
}
