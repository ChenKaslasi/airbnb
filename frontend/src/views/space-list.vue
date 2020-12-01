<template>
  <section class="space-list main-layout main-content" v-if="filterBy">
    <space-header />
    <list-filter :space="filterBy"></list-filter>
    <div>
      <ul class="card-container">
        <li v-for="space in getSpaces" :key="space._id">
          <space-preview
            :space="space"
            @click.native="spaceClicked(space._id)"
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
     listFilter
  },
  data() {
    return {
      filterBy: {
        city: ""
      },
    };
  },
  async created() {
    this.filterBy.city = this.$route.query.city;
    const filterBy = this.filterBy;
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

<style lang="scss" >

.search {
    display: block;
}

</style>
