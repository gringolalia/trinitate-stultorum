<template>
  <div>
    <v-tabs v-model="active">
      <v-tabs-bar class="cyan" dark>
        <v-tabs-item
          v-for="tab in tabs"
          :key="tab.url"
          ripple
          :to="tab.url"
        >
          Item {{ tab.name }}
        </v-tabs-item>
        <v-tabs-slider color="yellow"></v-tabs-slider>
      </v-tabs-bar>
    </v-tabs>
    <v-card flat>
      <v-slide-x-transition mode="out-in">
        <router-view></router-view>
      </v-slide-x-transition>
    </v-card>


  </div>
</template>

<script>
  export default {
    data () {
      return {
        tabs: [
          { url:'/Test', name: '1' },
          { url:'/Test/tab-2', name: '2' }
        ],
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
  }
</script>