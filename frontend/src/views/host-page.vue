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
        <label for="city">Where is the space?</label>
        <select name="city" v-model="space.city">
          <option value="Barcelona">Barcelona</option>
          <option value="New York">New York</option>
          <option value="Sydney">Sydney</option>
        </select>
        <button class="listing-btn" @click="addSpace">
          Start your Listing
        </button>
      </form>
    </div>
  </section>
</template>
<script>
import spaceHeader from "@/cmps/space-header.cmp.vue";
// import spaceService from '../services/space.service.js'
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
        city:'',
      },
    };
  },
  computed: {
    getBeds() {
      let beds;
      if (this.bedrooms === 1) {
        return (beds = 1);
      } else if (this.bedrooms === 2) {
        return (beds = 2);
      } else if (this.bedrooms === 3) {
        return (beds = 3);
      } else {
        console.log(beds);
        return (beds = 1);
      }
    },
    getCountry(){
      if(this.city==='Barcelona')return  "Spain"
      else if(this.city==='New York')return {lat: 40.67414,lng: -73.95667}
      else return  "Australia"
    },
    getCords(){
     if(this.city==='Barcelona')return  {lat: 41.40082,lng: 2.16942}
      else if(this.city==='New York')return  "United States"
      else return  {lat: 	-33.865143 ,lng:151.209900}
    }
  },
  methods: {
    async addSpace() {
      if (!this.space.fullName) {
        console.log("no name added");
      }
      try {
        let newSpace = {
          name: this.space.fullName,
          spaceDesc: this.space.spaceDesc,
          bedrooms: this.space.bedrooms,
          beds: this.getBeds,
          bathrooms: this.getBeds, //CHANGE LATER
          amenities: ["Air conditioning", "Essentials", "Hangers", "Heating"],
          price: this.space.price,
          address:{
            city: this.space.city,
            country:this.getCountry,
            coordinates: this.getCords
          },
          host:{
            id:'u101',
            url: "https://www.airbnb.com/users/show/2128778",
            name: "Maxwell",
            profileImg: "https://a0.muscache.com/im/pictures/user/f6c7bc12-dca4-48d1-8b1a-d6d0ad27e84c.jpg?im_w=240",
            isSuperhost: true,
            identityVerified: true
          },
          imgs: [
            "https://a0.muscache.com/im/pictures/acf0d195-2e73-4756-9f28-e81369a9bf3b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d534a3df-c57f-4049-8a80-33184e332d3f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/970dcbe8-c1ea-4004-9a02-bfe727fa46a4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6954e4dd-3bba-42e0-8b6b-ccb79b87ca39.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/221a673a-0d8e-4bed-83d1-3b0b5a74df72.jpg?im_w=720",
          ],
        };
        console.log("new space", newSpace);
          this.$store.dispatch({
            type: "addSpace",
            space: newSpace,
          });
          this.$router.push("/");
      } catch (err) {
        console.log("ERR:", err);
      }
    },
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
        outline: none !important;
        background-image: linear-gradient(
          to right,
          #ff385c,
          #ef305c,
          #e93568,
          #ce235b,
          #ce2d63
        );
        &:hover {
          cursor: pointer;
          background-image: radial-gradient(
            circle at center center,
            rgb(255, 56, 92) 0%,
            rgb(230, 30, 77) 27.5%,
            rgb(227, 28, 95) 40%,
            rgb(215, 4, 102) 57.5%,
            rgb(189, 30, 89) 75%,
            rgb(189, 30, 89) 100%
          ) ;
        }
        border: none;
        padding: 22px;
        overflow: hidden !important;
        border-radius: 8px !important;
        &:hover {
          cursor: pointer;
        }
      }
}
</style>
