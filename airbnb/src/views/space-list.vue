<template>
  <section class="space-list" v-if="filterBy">
    <h1>Stays in {{ filterBy }}</h1>
    <section class="card-container">
      <ul>
        <li class="card" v-for="space in getSpaces" :key="space._id">
          <space-preview :space="space"></space-preview>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import spacePreview from "../cmps/space-preview.cmp.vue";
export default {
  components: { spacePreview },
  data() {
    return {
      filterBy: "",
    };
  },
  async created() {
    const filterBy = this.$route.params.city;
    this.filterBy = filterBy;
    await this.$store.dispatch({
      type: "filterSpaces",
      filterBy,
    });
  },
  computed: {
    getSpaces() {
      return this.$store.getters.spacesForDisplay;
    },
  },
};
</script>

<style>
</style>
