<template>
  <section class="review-container details-conatiner">
    <div class="card-container">
      <ul class="cards" v-for="review in reviews" :key="review.id">
        <li class="review-card">
          <div class="card-header">
            <img :src="review.by.img" />
            <div class="header-txt">
              <p class="reviewer-name">{{ review.by.name }}</p>
              <p class="reviewer-date">{{ dateForDisplay }}</p>
            </div>
          </div>
          <p class="review-txt">{{ review.txt }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    reviews: Array,
  },
  computed: {
    dateForDisplay() {
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();

      var newdate = year + "/" + month + "/" + day;
      return newdate;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>