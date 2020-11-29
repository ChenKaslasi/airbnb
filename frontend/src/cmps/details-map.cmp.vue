<template>
  <section class="map-container" v-if="space">
    <!-- <GmapMap
      :center="{
        lat: this.space.address.coordinates.lat,
        lng: this.space.address.coordinates.lng,
      }"
      :zoom="12"
      map-type-id="terrain"
      style="height: 400px"
    >
      <gmap-custom-marker
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
        :marker="marker"
        alignment="bottomright"
      > -->
    <!-- <img class="marker" src="https://image.pngaaa.com/0/107000-small.png" /> -->
    <!-- <img src="../" /> -->
    <!-- <map-marker></map-marker>
      </gmap-custom-marker> -->
    <!-- <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      /> -->
    <!-- </GmapMap> -->
    <GmapMap 
      :center="{
        lng : this.space.address.coordinates.lng,
        lat : this.space.address.coordinates.lat,
      }"
      :zoom="14"
      map-type-id="terrain"
      style="height: 400px"
    >
     <gmap-custom-marker 
      v-for="(m, index) in markers" :key="index"
      :position="m.position"
      :marker="{
        lng : markers[index].position.lng,
        lat : markers[index].position.lat,
      }"
      alignment="bottomright"
      >
        <img class="marker-img" src="https://www.svgrepo.com/show/22031/home-icon-silhouette.svg"/>
      </gmap-custom-marker> 
    </GmapMap>
  </section>
</template>

<script>
// import mapMarker from '../cmps/map-marker.cmp.vue'
import GmapCustomMarker from "vue2-gmap-custom-marker";
// import moFo from '../assets/icons/bed.svg'
export default {
  components: {
    "gmap-custom-marker": GmapCustomMarker,
    // mapMarker,
  },
  props: {
    space: Object,
  },
  created() {
    console.log(this.space, "Space");
    console.log(this.space.address.coordinates.lat, "Lat--------");
    console.log(this.space.address.coordinates, "coords------");
    console.log(this.space.address, "adress------");
    console.log(this.markers[0].address.coordinates.lat);
  },
  data() {
    return {
      markers: [
        {
          position: {
            lat: this.space.address.coordinates.lat,
            lng: this.space.address.coordinates.lng,
          },
        },
      ],
    };
  },
};
</script>

<style>
.marker-img {
  width: 30px;
  height: 30px;
}
</style>