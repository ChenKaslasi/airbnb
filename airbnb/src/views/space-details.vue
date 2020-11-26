<template>
  <section class="details-container " v-if="currSpace">
    <gallery :space="currSpace" />
    <section class="flex">
      <section class="main-content">
        <details-summery :space="currSpace" />
        <details-description :space="currSpace" />
        <details-amenities :space="currSpace" />
        <details-calendar />
      </section>
      <section class="checkout-card">
        <h1>checkout card cmp</h1>
      </section>
    </section>

    <section class="reviews"></section>
    <section class="host"></section>
    <section class="more"></section>
  </section>
</template>

<script>
import spaceService from "../services/space.service.js";
import gallery from "../cmps/space-gallery.cmp";
import detailsSummery from "../cmps/details-summery.vue";
import detailsDescription from "../cmps/details-description.vue";
import detailsAmenities from "../cmps/details-amenities.cmp.vue";
import detailsCalendar from "../cmps/details-calendar.cmp.vue";

export default {
  components: {
    gallery,
    detailsSummery,
    detailsDescription,
    detailsAmenities,
    detailsCalendar
  },
  data() {
    return {
      currSpace: null,
    };
  },
  created() {
    // const spaceId = this.$route.params.id;
    const spaceId = 1001265;
    spaceService.getById(spaceId).then((space) => (this.currSpace = space));
  },
};
</script>

<style>
</style>