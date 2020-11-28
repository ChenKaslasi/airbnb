<template>
  <section class="filter-container flex justify-center align-center">
    <div class="wrapper flex">
      <el-popover class="box" placement="bottom" width="350" trigger="click" :visible-arrow="false">
        <div class="location flex column" slot="reference">
          <span class="title">Location</span>
          <span class="desc">Where are you going?</span>
        </div>

        <div class="location-dropdown flex column" :offset="30">
          <span>GATEWAYS</span>
          <div class="loc-btn flex wrap">
            <el-button round>Round</el-button>
            <el-button round>Round</el-button>
            <el-button round>Round</el-button>
          </div>
        </div>
      </el-popover>

      <el-popover
        class="box"
        placement="bottom"
        width="700"
        height="150"
        trigger="click"
      >
        <div class="dates flex column" slot="reference">
          <span class="title">Dates</span>
          <span class="desc">Check in - Check out</span>
        </div>
        <details-calendar />
      </el-popover>

      <el-popover class="box" placement="bottom" width="200" trigger="click">
        <div class="guests flex column" slot="reference">
          <span class="title">Guests</span>
          <span class="desc">Add guests</span>
        </div>
        <span> this is popover</span>
      </el-popover>

      <div class="search-icon flex jusify content align-center">
        <div class="btn">
          <img src="../assets/icons/search_m.svg" />
        </div>
      </div>
    </div>



 <popper
    trigger="click"
    :options="{
      placement: 'bottom',
      modifiers: { offset: { offset: '0,10px' } }
    }">
    <div class="popper">
      Popper Content
    </div>
 
    <button slot="reference">
      Reference Element
    </button>
  </popper>
  
  </section>
</template>

<script>
import detailsCalendar from "./details-calendar.cmp.vue";
 import Popper from 'vue-popperjs';

export default {
  components: {
    detailsCalendar,
    Popper
  },
  data() {
    return {
      filterBy: null,
    };
  },
  methods: {
    emitFilter() {
      this.$emit("filter", this.filterBy);
      console.log("filter", this.filterBy);
    },
  },
};
</script>

<style lang="scss" scoped>
.location-dropdown{
  border-radius: 12px;
}
</style>