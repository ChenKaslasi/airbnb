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
// import VueNumericInput from 'vue-numeric-input';

export default {
  components: {
    detailsCalendar,
    Popper,
    // VueNumericInput
  },
  data() {
    return {
      filterBy: null,
      guestNum: 1,
    };
  },
  methods: {
    emitFilter() {
      this.$emit("filter", this.filterBy);
      console.log("filter", this.filterBy);
    },
    handleChange(value) {
        console.log(value)
      },
  setGuests(value) {
      this.guestNum += value;
      console.log(this.guestNum);
    },
  },
};
</script>

<style lang="css" scoped>
.calender-contianer {
  border-top: none;
  padding: 0;
  z-index: 500;
}

.counter{
  background: none;
}
    
</style>