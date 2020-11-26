<template>
  <section class="amenities-container">
    <h1>Amenities</h1>
    <ul class="amenities-list" v-for="(amenity,idx) in space.amenities" :key="idx">
      <li class="amenity flex align-center" v-if="amenity === 'TV'">
        <img src="@/assets/icons/tv.svg">
        <span>{{amenity}}</span>
      </li>
      <li class="amenity flex align-center" v-if="amenity === 'Wifi'">
        <img src="@/assets/icons/wifi.svg">
        <span>{{amenity}}</span>
      </li>
      <li class="amenity flex align-center" v-if="amenity === 'Air conditioning'">
        <img src="@/assets/icons/air.svg">
        <span>{{amenity}}</span>
      </li>
      <li class="amenity flex align-center" v-if="amenity === 'Pool'">
        <img src="@/assets/icons/pool.svg">
        <span>{{amenity}}</span>
      <li class="amenity flex align-center" v-if="amenity === 'Free parking on premises'">
        <img src="@/assets/icons/parking.svg">
        <span>{{amenity}}</span>
      <li class="amenity flex align-center" v-if="amenity === 'Kitchen'">
        <img src="@/assets/icons/kitchen.svg">
        <span>{{amenity}}</span>
      <li class="amenity flex align-center" v-if="amenity === 'Elevator'">
        <img src="@/assets/icons/elevator.svg">
        <span>{{amenity}}</span>
      <li class="amenity flex align-center" v-if="amenity === 'Dryer'">
        <img src="@/assets/icons/dryer.svg">
        <span>{{amenity}}</span>
      <li class="amenity flex align-center" v-if="amenity === 'Iron'">
        <img src="@/assets/icons/iron.svg">
        <span>{{amenity}}</span>
      <li class="amenity flex align-center" v-if="amenity === 'Essentials'">
        <img src="@/assets/icons/essentials.svg">
        <span>{{amenity}}</span>
      <li class="amenity flex align-center" v-if="amenity === 'Hangers'">
        <img src="@/assets/icons/hangers.svg">
        <span>{{amenity}}</span>
      </li>
      <li class="amenity flex align-center" v-if="amenity === 'Hot tub'">
        <img src="@/assets/icons/tub.svg">
        <span>{{amenity}}</span>
      </li>
      <li class="amenity flex align-center" v-if="amenity === 'Laptop friendly workspace'">
        <img src="@/assets/icons/workspace.svg">
        <span>{{amenity}}</span>
      </li>
    </ul>
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