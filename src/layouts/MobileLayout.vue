<template>
  <div class="lotte_dfs_container" ref="mobileLayout">
    <Header />
    <main class="contents_area" role="main">
      <contentsArea />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./LayoutHeader.vue";
import Footer from "./LayoutFooter.vue";
import contentsArea from "./LayoutContent.vue";

export default {
  data() {
    return {};
  },

  components: {
    Header,
    Footer,
    contentsArea
  }
};
</script>

<style lang="scss" scoped>
.contents_area {
  margin-top: 90px;
}
</style>
