<template>
  <div id="app">
    <router-view />
    <v-menu v-if="menuShow" />
  </div>
</template>

<script>
import Menu from "@/components/menu";
export default {
  name: "App",
  data() {
    return {
      menuShow: ["Home", "Classify", "My"].indexOf(this.$route.name) > -1,
    };
  },
  components: {
    "v-menu": Menu,
  },
  watch: {
    $route() {
      this.menuShow = ["Home", "Classify", "My"].indexOf(this.$route.name) > -1;
    },
  },
};
</script>

<style>
#app {
  font-family: -apple-system-font, PingFang SC, Helvetica Neue, Helvetica,
    STHeiTi, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 清除图片底部留白 */
img {
  display: block;
}
</style>
