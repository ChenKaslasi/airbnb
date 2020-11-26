<template>
  <section class="details-description">
    <p class="location">{{space.locationDesc}}</p>
    <h3 >The space</h3>
    <!-- Todo: long text cmp  -->
    <p class="space">{{space.spaceDesc}}</p>
  </section>
</template>

<script>
export default {
props: {
    space: Object,
  },
}
</script>

<style>

</style>