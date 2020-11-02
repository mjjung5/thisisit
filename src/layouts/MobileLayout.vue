<template>
  <div 
  class="lotte_dfs_container"
  ref="mobileLayout"
  >
    <Header />
    <main
    class="contents_area"
    role="main">
    </main>
    <Footer /> 

  </div>
</template>

<script>
import Header from "./LayoutHeader.vue"
import Footer from "./LayoutFooter.vue"
export default {
  
  data(){

  },

  components: {
    Header,
    Footer
  }

}
</script>

<style lang="scss">
  
</style>