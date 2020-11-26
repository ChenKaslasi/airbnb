<template>
  <section class="space-list" v-if="filterBy">
    <h1>Stays in {{ filterBy }}</h1>
    <section>
      <ul class="card-container">
        <li v-for="space in getSpaces" :key="space._id">
          <space-preview
            :space="space"
            @click.native="spaceClicked(space._id)"
          ></space-preview>
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
  methods: {
    spaceClicked(id) {
      this.$router.push(`/${this.filterBy}/${id}`);
    },
  },
};
</script>

<style>
</style>
