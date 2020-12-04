<template>
  <section class="dashborad-container main-layout">
    <space-header />
    <section class="hostpage-container main-content flex">
      <div class="reservation">
        <div class="reservation-title">
          <div class="top">Pending</div>
          <div class="bottom"><span>5 new items ; 87% response rate</span></div>
        </div>
        <div class="reservation-boxes">
          <div class="box flex">
            <div class="image">
              <img src="https://a0.muscache.com/im/pictures/user/7b1ee769-b250-4160-930f-96f89c5b4db0.jpg?im_w=240"/>
            </div>
            <div class="txt">
              <div class="name">Request ; Elise</div>
              <div class="expiry">Expires in 2 hours</div>
              <div class="desc">
                3 guests ; june 21 - june 23 ; stylish Russian Hill APartment
              </div>
            </div>
            <div class="responed">Respond</div>
          </div>
          <div class="box flex">
            <div class="image">
              <img src="https://a0.muscache.com/im/pictures/user/dd24ff7d-8c11-4038-9ece-17142238410b.jpg?im_w=240" />
            </div>
            <div class="txt">
              <div class="name">Request ; Ciela</div>
              <div class="expiry">Expires in 6 hours</div>
              <div class="desc">
                2 guests ; june 25 - june 27 ; stylish Russian Hill APartment
              </div>
            </div>
            <div class="responed">Respond</div>
          </div>
          <div class="box flex">
            <div class="image">
              <img src="https://a0.muscache.com/im/pictures/user/63834664-93e1-4048-a06d-34fe490b3c3e.jpg?im_w=240" />
            </div>
            <div class="txt">
              <div class="name">Request ; Sabrisa</div>
              <div class="expiry">Expires in 12 hours</div>
              <div class="desc">
                3 guests ; june 29 - june 30 ; stylish Russian Hill APartment
              </div>
            </div>
            <a class="responed">Respond</a>
          </div>
        </div>
      </div>
      <div class="hosting-summary">
        <div class="summary-title">Hosting summary</div>
        <div class="summary-boxes">
          <div class="job-box">
            <div class="top">Fantastic job</div>
            <div class="bottom">
              Guests love what you're doing. keep up the great work
            </div>
            <div class="details">View details</div>
          </div>
          <div class="earning-box">
            <div class="earnings">
              <div>April earnings</div>
              <div>2650$</div>
            </div>
            <div class="views">
              <div>30-day views</div>
              <div>751</div>
            </div>
          </div>
          <div class="reviews-box">
            <div class="rating">
              <div>Overall rating</div>
              <div>4.9 󰀄</div>
            </div>
            <div class="reviews">
              <div>Total reviews</div>
              <div>40</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import spaceHeader from "../cmps/space-header.cmp.vue";
export default {
  components: {
    spaceHeader,
  },
};
</script>

<style lang="scss" scoped>

</style>>


  