<template>
  <section class="host-container flex">
    <section class="left">
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
      <div class="icons flex">
        <div class="reviews flex">
          <span class="star">󰀄</span>
          <span> {{ `${space.reviews.length} Reviews` }} </span>
        </div>
        <div class="identity flex">
          <img src="../assets/icons/verified.svg" />
          <span>Identity verified</span>
        </div>
      </div>
      <div class="text">
        <span>{{space.host.about}}</span>
      </div>
    </section>
    </section>

    <section class="right">
      <span>Response rate: {{space.host.responseTime}}</span>
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