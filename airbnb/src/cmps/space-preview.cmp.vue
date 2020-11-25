<template>
  <section class="space-preview">
    <div class="card">
      <img class="ratio-square" :src="space.imgs[0]" alt="" />
      <div>{{ space.roomType }} * {{ space.address.city }}</div>
      <div>{{ space.name }}</div>
      <div>{{ space.price }}$</div>
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