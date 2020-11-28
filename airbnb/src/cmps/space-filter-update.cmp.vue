<template>
  <section class="filter-container">
    <div class="wrapper">
      <div class="location">
        <span>Location</span>
        <span>Where are you go...</span>
      </div>
      <div class="date">
        <div class="check-in">
          <span>Check-in</span>
          <span>Add dates</span>
        </div>
        <div class="check-out">
          <span>Check-out</span>
          <span>Add dates</span>
        </div>
      </div>
      <div class="guests">
        <span>Guests</span>
        <span>Add</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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

.el-row{

  background-color: red;
  padding: 30px
}
</style>