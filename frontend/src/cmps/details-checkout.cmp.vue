<template>
  <section class="checkout-container">
    <div class="checkout-card">
      <section class="aligner" v-if="space">
        <div class="checkout-header flex">
          <h3 class="price">${{ space.price }}<span> / night</span></h3>
          <!-- {{range}} -->
          <div>
            <span class="star">󰀄</span>
            <span class="rating">{{ ratingForDisplay }}</span>
            <span class=""> {{ `(${space.reviews.length})` }} </span>
          </div>
        </div>
        <form>
          <div class="checkout-select">
            <v-date-picker v-model="range" is-range>
              <template v-slot="{ inputValue, inputEvents }">
                <div class="input-container flex justify-center items-center">
                  <input
                    :value="inputValue.start"
                    v-on="inputEvents.start"
                    class="start-date"
                  />
                  <input
                    :value="inputValue.end"
                    v-on="inputEvents.end"
                    class="end-date"
                  />
                </div>
              </template>
            </v-date-picker>
            <button class="guest-modal-btn" @click="guestModal">
              {{ adultCount + childrenCount + infantCount }} guest
            </button>
            <div class="modal" v-if="isShown">
              <div class="container-btns">
                <div class="btn-container">
                  <div class="txt">Adults:</div>
                  <div class="btns">
                    <button class="guest-btn" @click="setAdult(-1)">-</button>
                    <p>{{ adultCount }}</p>
                    <button class="guest-btn" @click="setAdult(1)">+</button>
                  </div>
                </div>
                <div class="btn-container">
                  <div class="txt">Children:</div>
                  <div class="btns">
                    <button class="guest-btn" @click="setChildren(-1)">
                      -
                    </button>
                    <p>{{ childrenCount }}</p>
                    <button class="guest-btn" @click="setChildren(1)">+</button>
                  </div>
                </div>
                <div class="btn-container">
                  <div class="txt">Infants:</div>
                  <div class="btns">
                    <button class="guest-btn" @click="setInfant(-1)">-</button>
                    <p>{{ infantCount }}</p>
                    <button class="guest-btn" @click="setInfant(1)">+</button>
                  </div>
                </div>
                <div class="close-btn">
                  <p @click="guestModal">Close</p>
                </div>
              </div>
            </div>
          </div>
          <button @click="checkOut" class="checkout-btn">
            Check Availability
          </button>
          <div v-if="isCheckingOut" class="reserve-extension">
            <div class="extension-container">
              <div class="warning">
                <small class="payment-warning">You will be charged</small>
              </div>
              <div class="payment-desc">
                <p>{{ adultCount + childrenCount + infantCount }} guest</p>
                <div class="pricing">
                  <p>{{ space.price }} X {{ daysForDisplay }}</p>
                  <p>{{ totalPrice }}</p>
                </div>
                <p class="total">Total: {{ totalPrice }}</p>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  </section>
</template>

<script>
import vDatePicker from "v-calendar/lib/components/date-picker.umd";
import moment from "moment";

export default {
  props: {
    space: {
      type: Object,
    },
  },
  data() {
    return {
      adultCount: 1,
      childrenCount: 0,
      infantCount: 0,
      isShown: false,
      isCheckingOut: false,
      nights: null,

      order: {
        createdAt: Date.now(),
        userId: "",
        spaceId: "",
        status: null,
        totalPrice: null,
        guests: null,
        dates: {
          checkIn: null,
          checkOut: null,
        },
      },

      range: {
        start: new Date(2020, 9, 12),
        end: new Date(2020, 9, 16),
      },
    };
  },
  computed: {
    daysForDisplay() {
      const a = moment(this.range.start);
      const b = moment(this.range.end);
      const c = a.from(b, true);
      const d = c.replace("days", "");
      const e = parseInt(d);
      this.updateNight(e);
      return e + " nights";
    },
    totalPrice() {
      let priceByNights = this.nights * this.space.price;
      // var n = new Number(1000000);
      var locale = {
        style: "currency",
        currency: "USD",
      };

      var x = priceByNights.toLocaleString("en-US", locale);
      console.log(x);
      return x;
    },
    priceForDisplay() {
      return this.space.price * this.nights;
    },
    ratingForDisplay() {
      return this.space.reviewScores.rating / 2;
    },
  },
  methods: {
    updateNight(num) {
      this.nights = num;
    },
    guestModal() {
      this.isShown = !this.isShown;
    },
    setAdult(value) {
      this.adultCount += value;
    },
    setChildren(value) {
      this.childrenCount += value;
    },
    setInfant(value) {
      this.infantCount += value;
    },
    checkOut() {
      if (!this.isCheckingOut) return (this.isCheckingOut = true);
      if (this.isCheckingOut) {
        console.log("on track");
        this.addOrder(this.space._id);
        this.isCheckingOut = !this.isCheckingOut;
      }
    },
    addOrder(spaceId) {
      const order = JSON.parse(JSON.stringify(this.order));
      order.spaceId = spaceId;
      order.status = "pending";
      order.totalPrice = this.priceForDisplay;
      order.guests = this.adultCount + this.childrenCount + this.infantCount;
      order.dates.checkIn = this.range.start;
      order.dates.checkOut = this.range.end;
      console.log("This order!!!", order, "data order", this.order);
      this.$store.dispatch({
        type: "addOrder",
        order: order,
      });
    },
  },
  components: {
    vDatePicker,
    // numberInput,
  },
};
</script>

<style lang="scss" scoped>
.reserve-extension {
  .extension-container {
    // padding: 10px;
    display: flex;
    flex-direction: column;
    .warning {
      small {
        font-size: 14px;
        color: #717171;
      }
    }
    .payment-desc {
      padding: 10px;

      .pricing {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      p {
        padding: 10px;
        font-weight: 400;
        color: rgb(34, 34, 34);
        display: block;
        text-align: left;
        line-height: 20px;
        padding: 18px 0px 12px;
      }
      .total {
        border-top: 1px solid rgb(221, 221, 221);
        list-style-type: none;
        margin: 9px 0px 0px;
        // padding: 24px 0px 12px;
        font-weight: 800;
        font-size: 16px;
      }
    }
    .warning {
      margin: 0 auto;
      padding-top: 10px;
    }
  }
}
</style>