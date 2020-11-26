<template>
  <section class="space-preview">
      <img class="ratio-square" :src="space.imgs[0]" alt="" />
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
  computed: {},
};
</script>

<style>
</style>