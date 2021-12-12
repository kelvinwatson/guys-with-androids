<template>
  <main id="gwa-app" class="roboto pa3">
    <GwaTitleNav/>

    <router-view/>
  </main>
</template>

<script>
import GwaTitleNav from './components/GwaTitleNav.vue'

export default {
  name: 'App',
  components: {
    GwaTitleNav,
  },
  data: () =>( {

  }) 
}
</script>

<style>
#gwa-app {
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  line-height: initial;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
}
</style>
