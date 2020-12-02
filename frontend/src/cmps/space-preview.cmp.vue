<template>
  <section class="space-preview card">
    <div class="ratio-list">
      <el-carousel class="carousel" trigger="click" :autoplay="false">
        <el-carousel-item v-for="(img, idx) in space.imgs" :key="idx">
          <img :src="img" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <div v-if="space.reviewScores">
      <span class="star">󰀄</span> {{ spaceRate }} <span  class="reviews-count">({{ numOfReviewers }})</span>
      </div>
      <div v-if="space.roomType">{{ space.roomType }} · {{ space.address.city }}</div>
      <div>{{ spaceName }}</div>
      <div>
        <span class="price">${{ space.price }}</span> /night
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    space: Object,
  },
  computed: {
    spaceName() {
      const txt = this.space.name;
      if (txt.length > 40) {
        return txt.substring(0, 37) + "...";
      } else return txt;
    },
    spaceRate() {
      return this.space.reviewScores.rating / 2;
    },
    numOfReviewers() {
      return this.space.reviews.length;
    },
  },
};
</script>