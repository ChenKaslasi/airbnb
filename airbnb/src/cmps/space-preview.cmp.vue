<template>
  <section class="space-preview card">
    <img :src="space.imgs[0]" alt="" />
    <div>󰀄 {{ spaceRate }}</div>
    <div>{{ space.roomType }} · {{ space.address.city }}</div>
    <div>{{ space.name }}</div>
    <div>
      <span>{{ space.price }}$</span> /night
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