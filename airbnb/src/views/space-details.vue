<template>
  <section class="details-container">
    <gallery :space = currSpace />
    <!-- <pre>{{currSpace}}</pre> -->
      <!-- <section >
        <section class="main-content"></section>
        <section class="checkout card"></section>
      </section>

      <section class="reviews"></section>
      <section class="host"></section>
      <section class="more"></section> -->
  </section>
</template>

<script>
import spaceService from '../services/space.service.js'
import gallery from "../cmps/space-gallery.cmp"

export default {
  components: {
    gallery
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
}
</script>

<style>

</style>