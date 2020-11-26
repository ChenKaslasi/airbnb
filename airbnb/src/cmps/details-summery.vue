<template>
  <section class="details-summery flex " v-if="space">
    <div class="text">
    <div>
    {{`${space.roomType} hosted by ${space.host.name}`}}
    </div>
    <div>
    {{`${space.capacity} guests · ${space.spaceType} · ${space.beds} bed · ${space.bathrooms} bath`
}}
    </div>
    </div>
    <div class="thumbnail">
      <img :src="space.host.thumbnail" >
    </div>
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