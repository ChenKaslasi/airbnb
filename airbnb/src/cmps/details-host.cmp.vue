<template>
  <section class="host-container">
    <section class="top">
    <div class="thumbnail">
      <img :src="space.host.profileImg" />
    </div>
     <span class="title">{{ `Hosted by ${space.host.name}`}}</span>
     <!-- Todo : add host joined date to db -->
      <!-- <span class="info">{{`Joined in ${space}`}}</span> -->
      <span class="info">{{`Joined in March 2013`}}</span>

    </section>
      
    <section>

    </section>
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