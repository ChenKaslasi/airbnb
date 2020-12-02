<template>
  <section class="host-page main-layout main-content">
    <space-header />
    <div class="form-container">
      <div class="form-hero">
        <h2>Share your passion for hospitality </h2>
        <!-- <h2>Become a Host </h2> -->
      </div>
      <form class="form" @submit.prevent>
        <div class="input-container">
          <el-input class="form-input"
            placeholder="Please input your Name"
            v-model="space.fullName"
            clearable
            style="padding: 20 15px !important"
          >
          </el-input>
          <el-input class="form-input"
            placeholder="Please enter a Description"
            v-model="space.spaceDesc"
            clearable
          >
          </el-input>
          <el-select style="color=red;" v-model="space.city" class="form-input" placeholder="Location">
            <el-option
              v-for="currCity in cities"
              :key="currCity.value"
              :label="currCity"
              :value="currCity"
            >
            </el-option>
          </el-select>
          <el-select class="form-input" v-model="space.bedrooms" placeholder="Bedrooms">
            <el-option
              v-for="option in options"
              :key="option.value"
              :label="option"
              :value="option"
            >
            </el-option>
          </el-select>
        </div>
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
        city: "",
      },
      cities: ["Barcelona", "New York", "Sydney"],
      options: [1, 2, 3],
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
    getCountry() {
      if (this.city === "Barcelona") return "Spain";
      else if (this.city === "New York")
        return { lat: 40.67414, lng: -73.95667 };
      else return "Australia";
    },
    getCords() {
      if (this.city === "Barcelona") return { lat: 41.40082, lng: 2.16942 };
      else if (this.city === "New York") return "United States";
      else return { lat: -33.865143, lng: 151.2099 };
    },
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
          address: {
            city: this.space.city,
            country: this.getCountry,
            coordinates: this.getCords,
          },
          host: {
            id: "u101",
            url: "https://www.airbnb.com/users/show/2128778",
            name: "Maxwell",
            profileImg:
              "https://a0.muscache.com/im/pictures/user/f6c7bc12-dca4-48d1-8b1a-d6d0ad27e84c.jpg?im_w=240",
            isSuperhost: true,
            identityVerified: true,
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
.el-input--suffix .el-input__inner {
  padding-right:30px ;
  padding: 50px !important;
  background-color: chartreuse;
}
.el-input__inner {
    -webkit-appearance: none;
    background-color: #FFF;
    background-image: none;
    border-radius: 4px;
    border: 10px solid #DCDFE6  !important;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 20 15px !important;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
.host-page {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.form-container {

  height: 100%;
  display: flex;
  flex-direction: row;
  // border: 2px solid black;
  border-radius: 12px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  .form-hero {
    padding-left: 50px;
    font-size: 30px;
  }
  .form {
    padding: 50px;
    display: flex;
    flex-direction: column;
    .input-container {
      display: flex;
      flex-direction: column;
      .form-input{
        // data-v-2f4e84ea
        width: 330px;
        // height: 500px;
        box-sizing: border-box;

      }
    }
    input .el-input__inner{
      background-color: chartreuse;
    }
        // .el-input__inner{
        //   padding: 22px 15px;
  
        // } 
  }
  .listing-btn {
    // position: absolute;
    margin-top: 15px;
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
      );
    }
    border: none;
    padding: 17px;
    overflow: hidden !important;
    border-radius: 8px !important;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
