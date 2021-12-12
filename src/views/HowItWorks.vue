<template>
<div id="how-it-works">
  <h3 class="f4">How It Works</h3>

  <p class="fs-normal-m">We choose up to 20 pictures every week of men with their Android phones to feature on our page.</p>

  <p>So what are you waiting for? 
    <a href="#" @click='goTo("/upload")'>Upload a sexy pic now!</a>
  </p>
</div>
</template>

<script>
export default {
  name: 'HowItWorks',
  props: {
  },
  methods: {
    goTo(name) {
      this.$router.push(name)
    }
  }
}

</script>

<style scoped>

</style>

