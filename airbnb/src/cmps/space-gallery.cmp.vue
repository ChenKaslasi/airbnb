<template>
  <section class="gallery-container" v-if="space">
    <div class="top flex column">
      <h1 class="title">{{space.name}}</h1>
      <div class="info flex">
        <div class="reviews-summery">
          <span>󰀄</span>
          <span>{{space.reviewScores.rating}}</span> 
          <span>{{`(${space.reviews.length})`}}</span>
        </div>
        <!-- <div class="super-host" v-if="space.host.isSuperhost"> -->
        <div class="super-host" >
          <span>󰀃Superhost</span>
        </div>
      </div>
    </div>
    <div class="gallery-grid " >
      <div class="img1 ratio-square">
      <img :src="space.imgs[0]" >
      </div>
      <div class="img2 ratio-square" >
      <img :src="space.imgs[1]" >
      </div>
      <div class="img3 ratio-square" >
      <img  :src="space.imgs[2]" >
      </div>
      <div class="img4 ratio-square" >
      <img  :src="space.imgs[3]" >
      </div>
      <div class="img5 ratio-square" >
      <img  :src="space.imgs[4]" >
      </div>
    </div>
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