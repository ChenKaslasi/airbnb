<template>
  <section class="map-container">
    <GmapMap
  :center="{lat:this.space.address.coordinates.lat, lng:this.space.address.coordinates.lng}"
  :zoom="7"
  map-type-id="terrain"
  style=" height: 400px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
</GmapMap>
  </section>
</template>

<script>
export default {
  props: {
    space: Object,
  },
  data(){
        return{
            markers:[
                {position:{lat: this.space.address.coordinates.lat, lng: this.space.address.coordinates.lng}},
            ]
        }
    }
}
</script>

<style>

</style>