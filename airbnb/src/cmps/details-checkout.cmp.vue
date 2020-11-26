<template>
  <section class="checkout-container">
    <div class="checkout-card">
      <section v-if="space">
        ${{ space.price }}/ night
        <v-date-picker v-model="range" is-range>
          <template v-slot="{ inputValue, inputEvents }">
            <div class="flex justify-center items-center">
              <input
                :value="inputValue.start"
                v-on="inputEvents.start"
                class="border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300"
              />
              →
              <svg
                class="w-4 h-4 mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
              <input
                :value="inputValue.end"
                v-on="inputEvents.end"
                class="border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300"
              />
            </div>
          </template>
        </v-date-picker>
        <button class="guest-modal-btn" @click="guestModal">
          {{ guestNum }} guest
        </button>
        <div class="modal" v-if="isShown">
          <p>Adults: <number-input @emitChange="setGuests" /></p>
        </div>
        <button class="checkout-btn">Check Availability</button>
      </section>
    </div>
  </section>
</template>

<script>
import vDatePicker from "v-calendar/lib/components/date-picker.umd";
import numberInput from "./number-input.cmp.vue";

// import moment from 'moment';
export default {
  props: {
    space: {
      type: Object,
    },
  },
  data() {
    return {
      guestNum: 1,
      isShown: false,
      night: null,
      range: {
        start: new Date(2020, 9, 12),
        end: new Date(2020, 9, 16),
      },
    };
  },
  computed: {
    priceForDisplay() {
      return this.space.price * this.night;
    },
  },
  methods: {
    guestModal() {
      this.isShown = !this.isShown;
    },
    setGuests(value) {
      this.guestNum = value;
      console.log(this.guestNum);
    },
  },
  components: {
    vDatePicker,
    numberInput,
  },
};
</script>

<style lang="scss" scoped>
.modal {
  border: 2px solid black;
  position: absolute;
  z-index: 11;
  top: 110px;
  left: 0;
  right: 0;
  padding: 8px 24px;
  border: 1px solid #484848;
  border-radius: 8px;
  background-color: #fff;
}
.guest-modal-btn {
  background-color: transparent;
  color: #717171;
  margin: 0;
  padding: 16.5px 20px;
  border: 1px solid #717171;
  border-top: transparent;
  border-radius: 0 0 8px 8px;
  font-size: 12px;
  font-family: Circular;
  font-weight: 600;
  text-align: left;
  outline: none;
  width: 100%;
}

.checkout-container {
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(221, 221, 221);
  height: 100%;
  .checkout-card {
    position: relative;
    margin: 0 auto;
    display: flex;
    border-radius: 12px;
    padding: 24px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
    width: 50%;
    height: 15%;
    .checkout-btn {
      margin-top: 20px;
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