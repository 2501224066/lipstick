<template>
  <div class="menu">
    <div class="tab-box">
      <mu-container class="nav">
        <mu-bottom-nav color="red" :value="routeName">
          <mu-bottom-nav-item
            value="Home"
            title="主页"
            icon="home"
            to="/"
          ></mu-bottom-nav-item>
          <mu-bottom-nav-item
            value="Classify"
            title="分类"
            icon="grain"
            to="/classify"
          ></mu-bottom-nav-item>
          <mu-bottom-nav-item
            value="My"
            title="我的"
            icon="person"
            to="/my"
          ></mu-bottom-nav-item>
        </mu-bottom-nav>
      </mu-container>
    </div>
    <div class="tab-brace"></div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      routeName: this.$route.name,
    };
  },
  methods: {
    goPage(url) {
      this.$router.push({
        path: url,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  .tab-box {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    .nav {
      padding: 0;
    }
  }
  .tab-brace {
    width: 100%;
    height: 56px;
  }
}
</style>