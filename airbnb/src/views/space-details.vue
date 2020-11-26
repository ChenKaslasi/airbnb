<template>
  <section class="details-container " v-if="currSpace">
    <gallery :space="currSpace" />
    <section class="flex">
      <section class="main-content">
        <details-summery :space="currSpace" />
        <details-description :space="currSpace" />
        <details-amenity :space="currSpace" />
        <!-- <details-calendar /> -->
        <details-review :reviews="currSpace.reviews" />
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
import detailsAmenity from "../cmps/details-amenity.cmp.vue";
// import detailsCalendar from "../cmps/details-calendar.cmp.vue";
import detailsReview from "../cmps/details-review.cmp.vue";

export default {
  components: {
    gallery,
    detailsSummery,
    detailsDescription,
    detailsAmenity,
    // detailsCalendar,
    detailsReview
  },
  data() {
    return {
      currSpace: null,
    };
  },
  created() {
    const spaceId = this.$route.params.id;
    // const spaceId = 1001265;
    spaceService.getById(spaceId).then((space) => (this.currSpace = space));
  },
};
</script>
