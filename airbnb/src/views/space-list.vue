<template>
  <div class="about">
    <h1>This is The List page</h1>
    <section v-if="getSpaces">
      <pre v-for="space in getSpaces" :key="space._id"> {{
        space.address.city
      }}</pre>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  async created() {
    const filterBy = this.$route.params.city;
    console.log(filterBy, "filterBy!!");
    this.spaces = await this.$store.dispatch({
      type: "filterSpaces",
      filterBy,
    });
  },
  computed:{
    getSpaces(){
      return  this.$store.getters.spacesForDisplay
      
    }
  }
};
</script>

<style>
</style>
