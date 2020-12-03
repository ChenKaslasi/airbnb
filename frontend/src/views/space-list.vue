<template>
  <section class="space-list main-layout main-content" v-if="filterBy">
    <space-header />
    <list-filter @changeFilter="setFilter" :space="filterBy"></list-filter>
    <div>
      <ul class="card-container">
        <li v-for="space in spaces" :key="space._id">
          <space-preview
            :space="space"
            @click.native="spaceSelected(space._id)"
          ></space-preview>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import spacePreview from "../cmps/space-preview.cmp.vue";
import spaceHeader from "@/cmps/space-header.cmp.vue";
import listFilter from "@/cmps/list-filter.cmp.vue";

export default {
  components: {
    spaceHeader,
    spacePreview,
    listFilter,
  },
  data() {
    return {
      filterBy: {},
    };
  },
  async created() {
    console.log("created");
    this.filterBy = this.$route.query;
    const filterBy = this.filterBy;
    await this.$store.dispatch({
      type: "filterSpaces",
      filterBy,
    });
  },
  watch: {
    $route: async function () {
      this.filterBy = this.$route.query;
      const filterBy = this.filterBy;
      await this.$store.dispatch({
        type: "filterSpaces",
        filterBy,
      });
    },
  },
  computed: {
    spaces() {
      return this.$store.getters.spacesForDisplay;
    },
  },
  methods: {
    setFilter(filter) {
    this.$store.commit({ type: "setFilter", filter });
  },
    spaceSelected(id) {
      this.$router.push(`/${this.filterBy}/${id}`);
    },
  },
};
</script>
