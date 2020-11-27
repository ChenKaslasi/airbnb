<template>
  <div id="app">
    <space-header />
    <main>
      <!-- <router-link to="/">Home</router-link> | -->
      <router-view />
    </main>
    <!-- <space-footer /> -->
  </div> 
</template>

<script>
import spaceHeader from "@/cmps/space-header.cmp.vue";
// import spaceFooter from "@/cmps/space-footer.cmp.vue";

export default {
  components: {
    spaceHeader,
    // spaceFooter,
  },
};
</script>
