<template>
  <section class="checkout-container">
    <div class="checkout-card">
      <section v-if="space">
        ${{ space.price }}/ night

        <button class="checkout-btn">Check Availability</button>
      </section>
      <number-input />
    </div>
  </section>
</template>

<script>
import numberInput from "../cmps/number-input.cmp.vue";
export default {
  props: {
    space: {
      type: Object,
    },
  },
  data() {
    return {
      night: null,
    };
  },
  computed: {
    priceForDisplay() {
      return this.space.price * this.night;
    },
  },
  components: {
    numberInput,
  },
};
</script>

<style lang="scss" scoped>
.checkout-container {
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(221, 221, 221);
  height: 100%;
  .checkout-card {
    margin: 0 auto;
    display: flex;
    border-radius: 12px;
    padding: 24px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
    width: 50%;
    height: 15%;
    .checkout-btn {
      color: #ffffff;
      width: 100%;
      line-height: 20px !important;
      font-weight: 600 !important;
      font-size: 1rem;
      background-image: radial-gradient(
        circle at center center,
        rgb(255, 56, 92) 0%,
        rgb(230, 30, 77) 27.5%,
        rgb(227, 28, 95) 40%,
        rgb(215, 4, 102) 57.5%,
        rgb(189, 30, 89) 75%,
        rgb(189, 30, 89) 100%
      ) !important;
      border: none;
      padding: 16px;
      overflow: hidden !important;
      border-radius: 8px !important;
      &:hover {
        cursor: pointer;
      }
    }
  }
}

.from {
  border-right: none;
}
.to {
  border-left: none;
}
</style>