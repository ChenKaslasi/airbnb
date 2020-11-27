<template>
  <section class="host-container">
    <section class="top">
      <div class="thumbnail">
        <img :src="space.host.profileImg" />
      </div>
      <span class="title">{{ `Hosted by ${space.host.name}` }}</span>
      <!-- Todo : add host joined date to db -->
      <!-- <span class="info">{{`Joined in ${space}`}}</span> -->
      <span class="info">{{ `Joined in March 2013` }}</span>
    </section>
    <section class="content">
      <div class="reviews">
        <span class="star">󰀄</span>
        <span > {{ `${space.reviews.length} Reviews` }} </span>
      </div>
      <div class="identity flex">
        <img src="../assets/icons/verified.svg">
        <span>Identity verified </span>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    space: Object,
  },
};
</script>

<style>
</style>