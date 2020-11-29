<template>
  <section class="filter-container flex justify-center align-center">
    <div class="wrapper flex">
      <popper
        class="box"
        trigger="click"
        :options="{
          placement: 'bottom',
          modifiers: { offset: { offset: '0,20px' } },
        }"
      >
        <div class="location flex column" slot="reference">
          <span class="title">Location</span>
          <span class="desc">Where are you going?</span>
        </div>

        <div class="location-dropdown flex column">
          <span class="header">GATEWAYS</span>
          <div class="loc-btn flex wrap">
            <div>Barcelona</div>
            <div>New York</div>
            <div>Sydney</div>
          </div>
        </div>
      </popper>

      <popper
        class="box"
        trigger="click"
        :options="{
          placement: 'bottom',
          modifiers: { offset: { offset: '0,10px' } },
        }"
      >
        <div class="dates flex column" slot="reference">
          <span class="title">Dates</span>
          <span class="desc">Check in - Check out</span>
        </div>
        <details-calendar />
      </popper>

      <popper
        class="box"
        trigger="click"
        :options="{
          placement: 'bottom',
          modifiers: { offset: { offset: '0,20px' } },
        }"
      >
        <div class="guests flex column" slot="reference">
          <span class="title">Guests</span>
          <span class="desc">Add guests</span>
        </div>
       
       <div class="guest-dropdown ">
          <el-input-number class="numInput" v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number>
       </div>
      </popper>

      <div class="search-icon flex jusify content align-center">
        <div class="btn">
          <img src="../assets/icons/search_m.svg" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import detailsCalendar from "./details-calendar.cmp.vue";
import Popper from "vue-popperjs";

export default {
  components: {
    detailsCalendar,
    Popper,
  },
  data() {
    return {
      filterBy: null,
      num: 1
    };
  },
  methods: {
    emitFilter() {
      this.$emit("filter", this.filterBy);
      console.log("filter", this.filterBy);
    },
    handleChange(value) {
        console.log(value)
      }
  },
};
</script>

<style lang="scss" scoped>
.calender-contianer {
  border-top: none;
  padding: 0;
  z-index: 500;
}
</style>