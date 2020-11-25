<template>
  <div class="home">
    <space-filter  @filter="setFilter" />
  </div>
</template>

<script>
import spaceFilter from '../cmps/space-filter.cmp.vue'
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    spaceFilter
  },
  data() {
    return {
    }
  },
  methods: {
    setFilter(filterBy) {
      // this.$store.dispatch({
      //   type:'filterSpaces',
      //   filterBy
      // })
      this.$router.push(`/${filterBy}`)
    },
  },
};
</script>
