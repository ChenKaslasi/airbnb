<template>
  <section
    class="header-container main-layout"
    :class="{ scrollDisplay: isScrolled, homePageDisplay: isHomePage }"
  >
    <div class="content flex align-center justify-between">
      <div class="logo flex">
        <a href="/" class="logo flex align-center">
          <img class="logo-svg" src="../assets/icons/‏‏logo-pink.svg" />
          <span class="txt">airbnb</span>
        </a>
      </div>
      <!-- <div class="search" v-hide="!isScrolled && isHomePage"> -->
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
        <a class="become-host" href="/#/host">Become a Host</a>
        <div class="user-dropdown flex">
          <button
            @click="toggleDropdown"
            class="btn flex justify-around align-center"
          >
            <img class="hamburger-img" src="../assets/icons/hamburger.svg" />
            <img class="guest-img" src="../assets/icons/guest.svg" />
            <div v-show="isDropdownOpen" class="login-container">
              <ul class="login-dropdown">
                <li>
                  <button class="sign-up" @click="openModal('signUp')">
                    Sign up
                  </button>
                </li>
                <li><button @click="openModal('login')">Log in</button></li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </div>
    <login v-if="isModalOpen" :isLogin="isLogin" @close="closeModal"></login>
  </section>
</template>

<script>
import login from "../cmps/login.cmp.vue";

export default {
  components: {
    login,
  },
  data() {
    return {
      isScrolled: false,
      lastScrollPosition: 0,
      isHomePage: false,
      isDropdownOpen: false,
      isModalOpen: false,
      isLogin: true,
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
      this.isScrolled = currentScrollPosition !== 0;
    },

    setHomePage() {
      this.isHomePage = this.$route.path === "/";
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    openModal(action) {
      this.isLogin = action === "login" ? true : false;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
  created() {
    this.setHomePage();
  },
  watch: {
    $route: function () {
      this.setHomePage();
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