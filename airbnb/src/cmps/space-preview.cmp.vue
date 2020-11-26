<template>
  <section class="space-preview card">
    <img :src="space.imgs[0]" alt="" />
    <div><span class="star">󰀄</span> {{ spaceRate }}
    <div>{{ space.roomType }} · {{ space.address.city }}</div>
    <div>{{ space.name }}</div>
    <div>
      <span class="price">{{ space.price }}$</span> /night
    </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    space: Object,
  },
  computed: {
    spaceRate() {
      return this.space.reviewScores.rating / 2;
    },
  },
};
</script>

<style>
</style>