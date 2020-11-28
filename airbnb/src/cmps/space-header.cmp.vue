<template>
  <section
    class="header-container main-layout"
    :class="{ colorWhite: colored, homePageDisplay: isHomePage }"
  >
    <div class="content flex align-center justify-between">
      <div class="logo">
        <a href="/" class="logo flex align-center">
          <img class="logo-svg" src="../assets/icons/logo.svg" />
          <span class="txt">airbnb</span>
        </a>
      </div>
      <div class="search">
        <button class="btn flex align-center">
          <div class="txt">Start your search</div>
          <div class="search-icon">
            <img src="../assets/icons/search_m.svg" />
          </div>
        </button>
      </div>
      <div class="link-container flex">
        <a class="explore" href="/#/Barcelona">Explore</a>
        <a class="become-host" href="/#/Barcelona">Become a Host</a>
        <div class="user-dropdown flex">
          <button class="btn flex justify-around align-center">
            <img class="hamburger-img" src="../assets/icons/hamburger.svg" />
            <img class="guest-img" src="../assets/icons/guest.svg" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      colored: false,
      isHomePage: false,
      lastScrollPosition: 0,
    };
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      // hendle momentum scrolling on mobile
      if (currentScrollPosition < 0) {
        return;
      }
      // if(currentScrollPosition !== 0 && )
      this.colored = currentScrollPosition !== 0;
    },
    setHomePage() {
      console.log("run");
      this.isHomePage = this.$route.path === "/"
    },
  },
  created() {
    this.setHomePage();
  },
  watch: {
    "$route": function () {
      this.setHomePage()
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style>
</style>