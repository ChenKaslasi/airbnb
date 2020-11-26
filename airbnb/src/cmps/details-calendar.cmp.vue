<template>
  <section class="calender-contianer">
    <calendar :columns="$screens({ default: 2, lg: 1 })" />
  </section>
</template>

<script>
import calendar from 'v-calendar/lib/components/calendar.umd'
// import datePicker from 'v-calendar/lib/components/date-picker.umd'

export default {
  components: {
   calendar,
  //  datePicker
  },
};
</script>

<style>
</style>