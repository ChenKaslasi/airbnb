<template>
  <section class="filter-container flex justify-center align-center">
    <div class="wrapper flex">

      <el-popover class="box" placement="bottom" width="400" trigger="click">
        <div class="location flex column " slot="reference">
          <span class="title">Location</span>
          <span class="desc">Where are you go...</span>
        </div>
        <span> this is popover</span>
      </el-popover>

      <el-popover class="box" placement="bottom" width="700" height="150" trigger="click">
        <div class="dates flex column" slot="reference">
          <span class="title">Dates</span>
          <span class="desc">Check in - Check out</span>
        </div>
        <details-calendar />
      </el-popover>

      <el-popover class="box" placement="bottom" width="400" trigger="click">
        <div class="guests flex column" slot="reference">
          <span class="title">Guests</span>
          <span class="desc">Add guests</span>
        </div>
        <span> this is popover</span>
      </el-popover>

      <div class="search-icon">
        <div class="btn">
        <img src="../assets/icons/search_m.svg" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import detailsCalendar from "./details-calendar.cmp.vue";

export default {
  components: {
    detailsCalendar,
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

<style lang="scss">
.el-row {
  background-color: red;
  padding: 30px;
}
</style>