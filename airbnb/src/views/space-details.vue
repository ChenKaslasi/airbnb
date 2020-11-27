<template>
  <section class="details-container main-layout" v-if="currSpace">
    <gallery :space="currSpace" />
    <section class="flex ">
      <section class="main-content">
        <details-summery :space="currSpace" />
        <details-description :space="currSpace" />
        <details-amenity :space="currSpace" />
        <details-calendar :space="currSpace"/>
      </section>
      <section class="checkout-card">
        <details-checkout :space="currSpace" />
      </section>
    </section>

    <section >
      <details-review :reviews="currSpace.reviews" />
      <detailsMap :space="currSpace" />
      <detailsHost :space="currSpace" />
    </section>
  </section>
</template>

<script>
import spaceService from "../services/space.service.js";
import gallery from "../cmps/space-gallery.cmp";
import detailsSummery from "../cmps/details-summery.vue";
import detailsDescription from "../cmps/details-description.vue";
import detailsAmenity from "../cmps/details-amenity.cmp.vue";
import detailsCalendar from "../cmps/details-calendar.cmp.vue";
import detailsReview from "../cmps/details-review.cmp.vue";
import detailsCheckout from "../cmps/details-checkout.cmp.vue";
import detailsMap from "../cmps/details-map.cmp.vue";
import detailsHost from "../cmps/details-host.cmp.vue";

export default {
  components: {
    gallery,
    detailsSummery,
    detailsDescription,
    detailsAmenity,
    detailsCalendar,
    detailsReview,
    detailsCheckout,
    detailsMap,
    detailsHost,
  },
  data() {
    return {
      currSpace: null,
    };
  },
  created() {
    const spaceId = this.$route.params.id;
    spaceService.getById(spaceId).then((space) => (this.currSpace = space));
  },
};
</script>
