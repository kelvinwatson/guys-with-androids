<template>
  <GwaTitle msg="Guys With Androids"/>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/upload">Upload</router-link>
      <router-link to="/support">Support</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import GwaTitle from './components/GwaTitle.vue'

export default {
  name: 'App',
  components: {
    GwaTitle
  },
  data: () =>( {

  }) 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
