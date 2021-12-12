<template>
  <div id="home">
    <h2>December 2021</h2>
  </div>

  <GwaInfiniteGrid/>
  
</template>

<script>
import GwaInfiniteGrid from '../components/GwaInfiniteGrid.vue'

export default {
    name: "Home",
    props: {},
    components: { GwaInfiniteGrid }
}
</script>

<style scoped>

</style>
