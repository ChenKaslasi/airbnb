<template>
  <section class="calender-contianer">
    <v-calendar :columns="$screens({ default: 1, lg: 2 })" />
  </section>
</template>

<script>
import VCalendar from 'v-calendar';

export default {
  components: {
   VCalendar
  },
};
</script>

<style>
</style>