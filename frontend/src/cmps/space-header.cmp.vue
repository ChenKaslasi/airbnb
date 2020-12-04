<template>
  <section
    class="header-container main-layout"
    :class="{
      scrollDisplay: isScrolled,
      homePageDisplay: isHomePage,
      mobileSearch: isMobileSearch,
    }"
  >
    <div class="content flex align-center justify-between">
      <div class="logo flex">
        <a href="/" class="logo flex align-center">
          <img class="logo-svg" src="../assets/icons/‏‏logo-pink.svg" />
          <span class="txt">HomeSeek</span>
        </a>
      </div>

      <div class="search">
        <div
          @click="toggleFilter"
          :class="[{ searchNarrow: headerNarrow }]"
          v-if="headerNarrow"
        >
          <button v-if="!isMobileSearch" class="btn flex align-center">
            <div class="txt">{{ cityName }}</div>
            <div class="search-icon">
              <img src="../assets/icons/search_m.svg" />
            </div>
          </button>
        </div>

        <div v-if="!headerNarrow" class="filter">
          <space-filter :isHomePage="isHomePage" />
        </div>

        <div class="mobile-search" v-if="isMobileSearch">
          <div class="search-bar flex">
            <div ref="backBtn" class="back-btn" @click="toggleMobileSearch"><img src="../assets/icons/back-btn-mobile.svg"></div>
            <input type="text" placeholder="Where are you going?">
          </div>
          <div class="search-boxes">
            <div @click="selectCity('Barcelona')" class="box flex">
              <div class="image">
                <img src="../assets/img/mobile-city-bgc-1.jpg" >
              </div>
              <div class="txt flex column justify-center">
                <div class="top">Barcelona</div>
                <div class="bottom">Catalunya, Spain</div>
              </div>
            </div>
            <div @click="selectCity('New York')" class="box flex">
              <div class="image">
                <img src="../assets/img/mobile-city-bgc-2.jpg" >
              </div>
              <div class="txt flex column justify-center">
                <div class="top">New York</div>
                <div class="bottom">NY, United States</div>
              </div>
            </div>
            <div @click="selectCity('Sydney')" class="box flex">
              <div class="image">
                <img src="../assets/img/mobile-city-bgc-3.jpg" >
              </div>
              <div class="txt flex column justify-center">
                <div class="top">Sydney</div>
                <div class="bottom">NSW, Australia</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div @click="toggleFilter" v-if="!headerNarrow" class="overlay"></div>

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
            <div
              v-click-outside="toggleDropdown"
              v-if="isDropdownOpen"
              class="login-container"
            >
              <ul class="login-dropdown">
                <li>
                  <button class="sign-up" @click="openModal('signUp')">
                    Sign up
                  </button>
                </li>
                <li><button @click="openModal('login')">Log in</button></li>
                <li><button @click="logout">Log out</button></li>
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
import spaceFilter from "../cmps/space-filter.cmp";

export default {
  components: {
    login,
    spaceFilter,
  },
  data() {
    return {
      isScrolled: false,
      lastScrollPosition: 0,
      isHomePage: false,
      isDropdownOpen: false,
      isModalOpen: false,
      isLogin: true,
      isMobileSearch: false,
      headerNarrow: true,
      cityName: "Start your search",
    };
  },
  methods: {
    onScroll() {
      this.headerNarrow = true;
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition === 0) {
        this.headerNarrow = true;
      }

      this.isScrolled = currentScrollPosition !== 0 || window.innerWidth < 400;
    },

    setIsHomePage() {
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
    toggleFilter() {
      if (window.innerWidth > 400) {
        this.headerNarrow = !this.headerNarrow;
      } else {
        this.isMobileSearch = !this.isMobileSearch;
      }
    },
    toggleMobileSearch() {
      this.isMobileSearch = !this.isMobileSearch ;
    },
    async logout() {
      await this.$store.dispatch({ type: "logout" });
    },
    setCityName() {
      this.cityName = this.$route.query.city;
    },
    selectCity(cityName) {
       this.$router.push({path: "/city", query: {city: cityName}});
      this.$refs.backBtn.click();
    }
  },
  watch: {
    $route: function () {
      this.setIsHomePage();
      this.setCityName();
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    if (this.$route.query.city) {
      this.setCityName();
    }
    if (window.innerWidth < 400) {
      this.isScrolled = true;
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  created() {
    this.setIsHomePage();
  },
};
</script>