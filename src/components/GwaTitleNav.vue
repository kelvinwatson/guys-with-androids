<template>
    <nav id="gwa-nav" class="db dt-l w-100 border-box">
        <a class=" db dtc-l v-mid mid-gray dim w-100 w-30-l tc tl-l mb0-l w2 br-100" title="Home">
            <router-link class="no-underline dim w2 f7 br-100" to="/"><h1 class="GwaTitleNav-title-font black">GUYS WITH ANDROIDS</h1></router-link>
            <!-- <img src="http://tachyons.io/img/logo.jpg" class="dib w2 h2 br-100" alt="Site Name"> -->
        </a>
    
    <div class="db dtc-l v-mid w-100 w-40-l tc tr-l GwaTitleNav-nav-font">
    
        <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" title="How it works">
            <router-link class="f4 bg-light-green no-underline link hover-dark-pink black" to="/how-it-works">How it works</router-link>
        </a>
    
        <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" title="Upload">
            <router-link class="f4 no-underline link hover-gold black" to="/upload">Upload</router-link>
        </a>
        <a class="link dim dark-gray f6 f5-l dib" title="Support">
            <router-link class="f4 no-underline link hover-dark-blue black" to="/support">Support</router-link> 
        </a>
  </div>
  </nav>
</template>


<script>

</script>


<style scoped>
.GwaTitleNav-title-font {
/* font-family: 'Comfortaa', cursive; */
font-family: 'Press Start 2P', cursive;
/* font-family: 'Righteous', cursive; */
/* font-family: 'Special Elite', cursive; */
/* font-family: 'Unica One', cursive; */
}

.GwaTitleNav-nav-font {
font-family: 'Righteous', cursive;
/* font-family: 'Special Elite', cursive; */


}
</style>