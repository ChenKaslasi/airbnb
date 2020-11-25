<template>
  <div class="home">
    <div class="hero">
      <space-filter @filter="setFilter" />
      <div class="home-container">
        <div class="location-container">
          <div
            class="card"
            v-for="(img, idx) in imgs"
            :key="idx"
            @click="bookLocation(img.title)"
          >
            <template>
              <img :src="img.url" />
              <h3>{{ img.title }}</h3>
              <p>Book it NOW!</p>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import spaceFilter from "../cmps/space-filter.cmp.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    spaceFilter,
  },
  data() {
    return {
      imgs: [
        {
          title: "Barcelona",
          url: "https://wallpaperaccess.com/full/1471128.jpg",
        },
        {
          title: "New York",
          url:
            "https://www.nyhabitat.com/blog/wp-content/uploads/2014/12/Top-5-sunset-spots-nyc-empire-state-skyline.jpg",
        },
        {
          title: "Sydney",
          url:
            "https://hdwallpaperim.com/wp-content/uploads/2017/09/16/51093-cityscape-Sydney-Sydney_Opera_House-night-Australia.jpg",
        },
      ],
    };
  },
  methods: {
    setFilter(filterBy) {
      this.$router.push(`/${filterBy}`);
    },
    bookLocation(title) {
      this.$router.push(`/${title}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.hero {
  height: 100vh;
  width: 100vw;
  // background-color: lightpink;
  background-image: url("https://img5.goodfon.com/wallpaper/nbig/c/a5/nature-house-lake-mountains-village-saksun-faroe-islands-arc.jpg  ");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.card {
  // border: 2px solid black;
  text-align: start;
  & h3 {
    padding: 10px;
    padding-left: 10px;
    font-weight: 800;
    font-size: 1.3rem;
  }
}
.home-container {
  margin-top: 10px;
  .location-container {
    display: flex;
    flex-wrap: wrap;
    & .card {
      margin: 0 auto;
      flex-direction: row;
      & img {
        width: 307px;
        height: 204px;
        border-radius: 15px;
      }
      & p {
        color: rgb(136, 134, 134);
        padding-left: 10px;
      }
      & :hover {
        cursor: pointer;
      }
    }
  }
}
</style>