<template>
  <section class="host-page main-layout main-content">
    <space-header />
    <div class="wrapper">

      <div class="text">
        <h4 >SEE WHAT’S POSSIBLE</h4>
        <h2>Share your passion for hospitality - Become a Host</h2>
      </div>

    <div class="form-container flex">
      <div class="form-hero"></div>
      <form class="form" @submit.prevent>
        <div class="form-header">Tell us more about your place</div>
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
          Start your listing
        </button>
      </form>
    </div>
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
};
</script>

<style lang="scss" scoped>
</style>
