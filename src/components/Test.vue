<template lang="pug">
div
  v-tabs(v-model='active')
    v-tabs-bar.blue-grey(dark='')
      v-tabs-item(v-for='tab in tabs', :key='tab.url', ripple='', :to='tab.url')
        | {{ tab.name }}
      v-tabs-slider(color='black')

  v-card.pa-3(raised='')
    v-slide-x-transition(mode='out-in')
      router-view
</template>

<script>
  export default {
    data () {
      return {
        tabs: [
          { url: '/x-file', name: 'Stooges Altogether' },
          { url: '/x-file/tab-2', name: 'Moe' },
          { url: '/x-file/tab-3', name: 'Curly' },
          { url: '/x-file/tab-4', name: 'Larry' },
          { url: '/x-file/tab-5', name: 'Shemp' },
          { url: '/x-file/tab-6', name: 'Curly Joe' }
        ],
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
      methods: {
        next () {
          const active = parseInt(this.active)
          this.active = (active < 2 ? active + 1 : 0)
      }
    }
  }
</script>
