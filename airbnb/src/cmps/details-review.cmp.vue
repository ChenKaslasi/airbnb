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
.card-container{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cards {
  max-width: 400px;
  display: flex;
  flex-wrap: wrap;
  margin-right: 20px; 
}
.review-container {
  line-height: 20px;
  border-top: 1px solid rgb(221, 221, 221);
  padding: 30px 0px;
  .card-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    .review-card {
      color: #222222;
      text-align: start;
      // max-width: 350px; //later media query it
      object-fit: contain;
      margin-bottom: 30px;
      

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
</style>