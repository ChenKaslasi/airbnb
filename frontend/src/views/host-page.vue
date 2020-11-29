<template>
  <section class="host-page main-layout main-content">
    <space-header />
    <div class="form-container">
      <div class="form-hero">
        <h2>Share your passion for hospitality—become a host</h2>
      </div>
      <form class="form" @submit.prevent>
        <label for="fullName"> enter your name</label>
        <input type="text" name="fullName" v-model="space.fullName" />
        <label for="spaceDesc"> house description</label>
        <input type="text" name="spaceDesc" v-model="space.spaceDesc" />
        <label for="bedrooms"> number of bedrooms</label>
        <input type="number" name="bedrooms" v-model="space.bedrooms" />
        <label for="spaceDesc"> How much will you charge?</label>
        <input type="number" name="price" v-model="space.price" />
        <button class="listing-btn" @click="addSpace">
          Start your Listing
        </button>
      </form>
    </div>
  </section>
</template>
<script>
import spaceHeader from "@/cmps/space-header.cmp.vue";
// import { spaceService } from "../services/space.service.js";
export default {
  components: {
    spaceHeader,
  },
  data() {
    return {
      space: {
        fullName: "",
        spaceDesc: "",
        bedrooms: null,
        price: null,
      },
    };
  },
  methods: {
    async saveSpace() {
      if (!this.space.fullName) {
        console.log("no name added");
      }
      try {
        console.log("space", this.space);
        this.$store.dispatch({
          type: "addSpace",
          space: this.space,
        });
        this.$router.push("/");
      } catch (err) {
        console.log("ERR:", err);
      }
    }
  },
  created() {},
};
</script>





<style lang="scss" scoped>
.host-page {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  //   background-color: blue;
}
.form-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  border: 2px solid black;
  justify-content: center;
  align-items: center;
  .form-hero {
    padding: 50px;
  }
  .form {
    padding: 50px;
    display: flex;
    flex-direction: column;
  }
  .listing-btn {
    // position: absolute;
    margin-top: 35px;
    color: #ffffff;
    width: 100%;
    line-height: 20px !important;
    font-weight: 600 !important;
    font-size: 18px;
    background-image: linear-gradient(
      to right,
      #ff385c,
      #ef305c,
      #e93568,
      #ce235b,
      #ce2d63
    );
  }
}
</style>
