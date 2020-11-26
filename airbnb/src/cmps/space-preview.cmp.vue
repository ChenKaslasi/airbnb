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
      <span class="star">󰀄</span> {{ spaceRate }}
      <div>{{ space.roomType }} · {{ space.address.city }}</div>
      <div>{{ spaceName }}</div>
      <div>
        <span class="price">{{ space.price }}$</span> /night
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
      if (txt.length > 30) {
        return txt.substring(0, 25) + "...";
      } else return txt;
      //  return txt
    },
    spaceRate() {
      return this.space.reviewScores.rating / 2;
    },
  },
};
</script>