<template>
  <div>
    <section class="space-preview card">
      <el-carousel class="carousel" trigger="click" :autoplay="false">
        <el-carousel-item v-for="i in 4" :key="i">
          <img :src="space.imgs[i]" alt="" />
        </el-carousel-item>
      </el-carousel>
      <div>
        <span class="star">󰀄</span> {{ spaceRate }}
        <div>{{ space.roomType }} · {{ space.address.city }}</div>
        <div>{{ spaceName }}</div>
        <div>
          <span class="price">{{ space.price }}$</span> /night
        </div>
      </div>
    </section>
  </div>
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

<style>
.el-carousel__item h3 {
  color: #006eff;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #0061e9;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #004797;
}
</style>