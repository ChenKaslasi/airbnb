<template>
  <section class="review-container details-conatiner">
    <div class="card-container">
      <ul v-for="review in reviews" :key="review.id">
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
.review-container {
  border-top: 1px solid rgb(221, 221, 221);
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  .card-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    .review-card {
      color: #222222;
      text-align: start;
      margin: 40px;
      width: 500px; //later media query it
      object-fit: contain;

      & img {
        vertical-align: middle;
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      & .card-header {
        display: flex;
        .header-txt {
          display: flex;
          flex-direction: column;
          line-height: 30px;
          margin-left: 10px;
          & .reviewer-name {
            font-size: 1rem;
            line-height: 20px;
            font-weight: 700;
          }
        }
      }
      & .review-txt {
        margin-top: 5%;
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }
}
.review-container > * {
  padding: 10px;
}
@media (max-width: 1400px) {
  .review-card {
    width: 200px;
    margin: none;
    // background-color: cadetblue;
  }
}
</style>