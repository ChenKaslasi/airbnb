<template>
  <section class="calender-contianer">
    <h2>{{getDates}} nights in {{space.address.city}}</h2>
    <span>{{getStartDate}} - {{getEndDate}}</span>
    
    <picker class="picker"
      v-model="range"
      :select-attribute="selectDragAttribute"
      :drag-attribute="selectDragAttribute"
      is-range
      @drag="dragValue = $event" 
      color="pink"
      :columns="$screens({ default: 1, lg: 2 })"
      is-expanded
    >
      <template v-slot:day-popover="{ format }">
        <div>
          {{ format(dragValue ? dragValue.start : range.start, "MMM D") }}
          -
          {{ format(dragValue ? dragValue.end : range.end, "MMM D") }}
        </div>
      </template>
    </picker>
  </section>
</template>

<script>
// import calendar from "v-calendar/lib/components/calendar.umd";
import picker from "v-calendar/lib/components/date-picker.umd";
import moment from 'moment';

export default {
  props: {
    space: Object,
  },
  components: {
    // calendar,
    picker,
  },
  data() {
    return {
      dragValue: null,
      range: {
        start: new Date(),
        end: new Date().setDate(new Date().getDate() + 2),
      },
    };
  },
  computed: {
    selectDragAttribute() {
      return {
        popover: {
          visibility: 'hover',
          isInteractive: false, 
        },
      };
    },
    getDates() {
      const day = 24 * 60 * 60 * 1000;
      return Math.round(Math.abs((this.range.start - this.range.end) / day));
    },
    getStartDate() {
      return moment(this.range.start).format('LL')
    },
    getEndDate() {
      return moment(this.range.end).format('LL')
    }
  }
};
</script>

<style>
</style>