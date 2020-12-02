<template>
  <section class="host-page main-layout main-content">
    <space-header />
    <div class="form-container">
      <div class="form-hero">
        <h2>Share your passion for hospitality-</h2>
        <h2>Become a Host</h2>
      </div>
      <form class="form" @submit.prevent>
        <div class="input-container">
          <input
            type="text"
            class="form-input"
            placeholder="Please input your Name"
            v-model="space.fullName"
          />
          <input
            type="text"
            class="form-input"
            placeholder="Please enter a Description"
            v-model="space.spaceDesc"
          />
          <input
            type="number"
            class="form-input input-num"
            placeholder="How much will you charge"
            v-model="space.price"
          />
          <input
            type="number input-num"
            class="form-input"
            placeholder="How many bedrooms?"
            v-model="space.bedrooms"
          />
          <select
            v-model="space.city"
            class="form-input select-input"
            placeholder="Location"
          >
            <option value="" disabled selected>Where is your place?</option>
            <option
              class="form-input"
              v-for="city in cities"
              :key="city"
              :label="city"
              :value="city"
            ></option>
          </select>
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
          capacity: 10,
          spaceType: "Apartment",
          amenities: ["Air conditioning", "Essentials", "Hangers", "Heating"],
          price: this.space.price,
          roomType: "Entire home/apt",
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
            "https://www.pngitem.com/pimgs/m/176-1769258_01-airbnb-airbnb-art-direction-hd-png-download.png",
            "https://images.squarespace-cdn.com/content/v1/5909f768bf629a1fec7ad9fb/1546535306006-B8Z630M0BZCOZPNSY6TX/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p52bY8kZn6Mpkp9xtPUVLhvLurswpbKwwoDWqBh58NLxQZMhB36LmtxTXHHtLwR3w/lorisalessandria_airbnb_home01.png?format=1500w",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ckAc1MBJ46X_BialwmFLM2DMXX3YHGwgxA&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAWifsTblKQ_nMH7024e1ouKnf_EncWG53w&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mWqFEYl_YbRV_xWYqb-pcOGCyBDlKfufFQ&usqp=CAU",
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
.input-num::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.host-page {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.form-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  .form-hero {
    padding-left: 50px;
    font-size: 30px;
    width: 100%;
    h2 {
      padding: 20px;
    }
  }
  .form {
    padding: 50px;
    display: flex;
    flex-direction: column;
    width: 100%;
    .input-container {
      width: 100%;
      border: 2px solid #dcdfe6;
      border-top: none;
      // border-bottom:none;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      .form-input {
        // border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        border-left: none;
        border-right: none;
        border-bottom: none;
        color: #606266;
        font-size: inherit;
        line-height: 40px;
        outline: 0;
        padding: 10px 15px;
        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        width: 100%;
        // width: 330px;
        // height: 500px;
        box-sizing: border-box;
      }
    }
  }
  .input-container .select-input[data-v-2f4e84ea] {
          color:#b7b8bb !important;

  }
  .listing-btn {
    margin-top: 10px;
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
    padding: 25px;
    overflow: hidden !important;
    border-radius: 8px !important;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
