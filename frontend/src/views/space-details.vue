<template>
  <section  class="details-container main-layout" v-if="currSpace">
    <details-header v-if="isNarrowHeader" />
    <space-header v-if="!isNarrowHeader" :notifictionStatus="isNotifictionShown" />
    <gallery :space="currSpace" />
    <section class="flex main-content-container">
      <section class="main-content">
        <details-summery :space="currSpace" />
        <details-description :space="currSpace" />
        <details-amenity :space="currSpace" />
        <details-calendar :space="currSpace" @emitDates="setDates" />
      </section>
      <section >
        <details-checkout v-if="isDesktopDisplay" @emitCheckoutEvent="setNotifiction"  @emitClose="closeModal" :space="currSpace" :dates="currDates" />
      </section>
    </section>

    <section>
      <details-review :reviews="currSpace.reviews" />
      <detailsMap :space="currSpace" />
      <detailsHost id="detailsHost"  :space="currSpace" />
    </section>
    <details-footer @emitChange="checkOut" :space="currSpace" v-if="isNarrowHeader" />
  </section>
</template>

<script>
/////////tttt
// import VueScrollTo from 'VueScrollTo'
import spaceService from "../services/space.service.js";

import spaceHeader from "@/cmps/space-header.cmp.vue";
import detailsHeader from "../cmps/details-header.cmp.vue";
import gallery from "../cmps/space-gallery.cmp";
import detailsSummery from "../cmps/details-summery.vue";
import detailsDescription from "../cmps/details-description.vue";
import detailsAmenity from "../cmps/details-amenity.cmp.vue";
import detailsCalendar from "../cmps/details-calendar.cmp.vue";
import detailsReview from "../cmps/details-review.cmp.vue";
import detailsCheckout from "../cmps/details-checkout.cmp.vue";
import detailsMap from "../cmps/details-map.cmp.vue";
import detailsHost from "../cmps/details-host.cmp.vue";
import detailsFooter from "../cmps/details-footer.cmp.vue";

export default {
  components: {
    spaceHeader,
    gallery,
    detailsSummery,
    detailsDescription,
    detailsAmenity,
    detailsCalendar,
    detailsReview,
    detailsCheckout,
    detailsMap,
    detailsHost,
    detailsHeader,
    detailsFooter,
  },
  data() {
    return {
      currSpace: null,
      isNarrowHeader: false,
      isDesktopDisplay:true,
      isModalOpen:false,
      currDates: {start: null, end: null},
      isNotifictionShown: false,
      notifictionCounter: 0,
    };
  },
  methods: {
    checkOut(){
      console.log('lets get going');
      this.isDesktopDisplay=!this.isDesktopDisplay
      this.isModalOpen=!this.isModalOpen

    },
    setNotifiction() {
      console.log('from details');
      this.isNotifictionShown = !this.isNotifictionShown;
      this.notifictionCounter++;
    },
    closeModal(){
      console.log('emitted')
      if(this.isModalOpen){
        this.isDesktopDisplay=!this.isDesktopDisplay
        this.isModalOpen=!this.isModalOpen

        console.log(this.isModalOpen)
      }
    },
    handleResize() {
      if (window.innerWidth > 700) {
        console.log(window.innerWidth);
        this.isNarrowHeader = false;
        this.isDesktopDisplay = true;
      } else {
        this.isNarrowHeader = true;
        this.isDesktopDisplay = false;
      }
    },
    setDates({ start, end }) {
      this.currDates.start = start
      this.currDates.end = end
    }, 
  },
  created() {
    if (window.innerWidth < 700 && this.isDesktopDisplay ){
      console.log('cond create');
      this.handleResize();
    } 
    const spaceId = this.$route.params.id;
    spaceService.getById(spaceId).then((space) => (this.currSpace = space));
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>
