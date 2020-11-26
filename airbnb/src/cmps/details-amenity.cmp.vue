<template>
  <section class="amenity-container">
    <h1 class="title">Amenities</h1>
    <div class="box">
      <ul
        class="amenity-list"
        v-for="(amenity, idx) in space.amenities"
        :key="idx">
        <li class="amenity" :class="{hidden: amenity !== 'TV' }">
          <img src="@/assets/icons/tv.svg" />
          <span>{{ amenity }}</span>
        </li>
        <li class="amenity" v-if="amenity === 'Wifi'">
          <img src="@/assets/icons/wifi.svg" />
          <span>{{ amenity }}</span>
        </li>
        <li class="amenity" v-if="amenity === 'Air conditioning'">
          <img src="@/assets/icons/air.svg" />
          <span>{{ amenity }}</span>
        </li>
        <li class="amenity" v-if="amenity === 'Pool'">
          <img src="@/assets/icons/pool.svg" />
          <span>{{ amenity }}</span>
        </li>

        <li class="amenity" v-if="amenity === 'Free parking on premises'">
          <img src="@/assets/icons/parking.svg" />
          <span>{{ amenity }}</span>
        </li>

        <li class="amenity" v-if="amenity === 'Kitchen'">
          <img src="@/assets/icons/kitchen.svg" />
          <span>{{ amenity }}</span>
        </li>

        <li class="amenity" v-if="amenity === 'Elevator'">
          <img src="@/assets/icons/elevator.svg" />
          <span>{{ amenity }}</span>
        </li>

        <li class="amenity" v-if="amenity === 'Dryer'">
          <img src="@/assets/icons/dryer.svg" />
          <span>{{ amenity }}</span>
        </li>

        <li class="amenity" v-if="amenity === 'Iron'">
          <img src="@/assets/icons/iron.svg" />
          <span>{{ amenity }}</span>
        </li>

        <li class="amenity" v-if="amenity === 'Essentials'">
          <img src="@/assets/icons/essentials.svg" />
          <span>{{ amenity }}</span>
        </li>

        <li class="amenity" v-if="amenity === 'Hangers'">
          <img src="@/assets/icons/hangers.svg" />
          <span>{{ amenity }}</span>
        </li>
        <li class="amenity" v-if="amenity === 'Hot tub'">
          <img src="@/assets/icons/tub.svg" />
          <span>{{ amenity }}</span>
        </li>
        <li class="amenity" v-if="amenity === 'Laptop friendly workspace'">
          <img src="@/assets/icons/workspace.svg" />
          <span>{{ amenity }}</span>
        </li>
      </ul>
    </div>
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