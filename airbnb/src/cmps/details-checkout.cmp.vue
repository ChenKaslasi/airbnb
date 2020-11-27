<template>
  <section class="checkout-container">
    <div class="checkout-card">
      <section v-if="space">
        ${{ space.price }}/ night
        <div class="checkout-select">
          <v-date-picker v-model="range" is-range>
            <template v-slot="{ inputValue, inputEvents }">
              <div class="input-container flex justify-center items-center">
                <input
                  :value="inputValue.start"
                  v-on="inputEvents.start"
                  class="start-date border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300"
                />
                <input
                  :value="inputValue.end"
                  v-on="inputEvents.end"
                  class="end-date border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300"
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
.checkout-select {
  border: 1px solid #717171;
  border-radius:8px;
}
.input-container {
  border-bottom: 1px solid #717171;
  border-radius: 8px 8px 0px 0px ; 
  padding: 3px;
  .start-date {
    margin: 0;
    width: 100%;
    height: 100%;
    border: none;
    padding: 10px;
    border-right: 1px solid #717171;
  }
  .end-date {
    padding: 10px;
    width: 100%;
    border: none;
  }
}
.modal {
  border: 1px solid #717171;
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
  border: none;
  background-color: transparent;
  color: #717171;
  margin: 0;
  padding: 16.5px 20px;
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
    position: sticky;
    margin: 0 auto;
    // display: flex;
    border-radius: 12px;
    padding: 24px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
    width: 85%;
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
</style>