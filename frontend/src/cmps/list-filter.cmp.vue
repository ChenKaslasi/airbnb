<template>
  <section class="list-filter">
    <h1>Stays in {{ space.city }}</h1>
    <div class="buttons-container">
      <div class="btn-container">
        <button @click="togglePopper('cancel')">
          Cancellation flexibility
        </button>
        <div v-click-outside="closePopper" v-if="isPopperOpen.cancel" class="popper cancel-popper">
            <div class="popper-content">
              <p>Only show stays that offer cancellation flexibility</p>
              <el-switch
                @change="toggleDisable"
                v-model="value2"
                active-color="#222222"
                inactive-color="#717171"
              >
              </el-switch>
            </div>
            <div class="popper-footer">
              <button :class="checkDisabled">Clear</button>
              <button class="btn save-btn">Save</button>
            </div>
        </div>
      </div>
      <div class="btn-container">
        <button @click="togglePopper('type')">Type of place</button>
        <div v-click-outside="closePopper" v-if="isPopperOpen.type" class="popper type-popper">
          <div class="popper-content">
            <el-checkbox
              @change="toggleDisable"
              class="checkBox"
              v-model="checked"
              ><h4>Entire place</h4>
              Have a place to yourself</el-checkbox
            >
            <el-checkbox
              @change="toggleDisable"
              class="checkBox"
              v-model="checked2"
              ><h4>Private room</h4>
              Have your own room and share some <br />
              common spaces</el-checkbox
            >
          </div>
          <div class="popper-footer">
            <button :class="checkDisabled">Clear</button>
            <button class="btn save-btn">Save</button>
          </div>
        </div>
      </div>
      <div class="btn-container">
        <button @click="togglePopper('price')">Price</button>
        <div v-click-outside="closePopper" v-if="isPopperOpen.price" class="popper price-popper">
          <div class="popper-content">
            <div @click="focusInput(1)" class="full-input">
              <div>
                <label for="maxP">min price</label>
              </div>
              <div class="input-section">
                <span class="dollar">$</span
                ><input
                  ref="minInput"
                  type="number"
                  id="maxP"
                  name="maxP"
                  placeholder="10"
                />
              </div>
            </div>
            <span class="hyphen">–</span>
            <div @click="focusInput(2)" class="full-input">
              <div>
                <label for="maxP">min price</label>
              </div>
              <div class="input-section">
                <span class="dollar">$</span
                ><input
                  ref="maxInput"
                  type="number"
                  id="maxP"
                  name="maxP"
                  placeholder="1000+"
                />
              </div>
            </div>
          </div>
          <div class="popper-footer">
            <button :class="checkDisabled">Clear</button>
            <button class="btn save-btn">Save</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Popper from "vue-popperjs";

export default {
  components: {
    // popper: Popper,
  },
  props: {
    space: Object,
  },
  data() {
    return {
      isPopperOpen: {
        cancel: false,
        type: false,
        price: false,
      },
      value2: false,
      isDisabled: true,
      checked: false,
      checked2: false,
    };
  },
  computed: {
    checkDisabled() {
      if (this.isDisabled) return "clear-btn disabled";
      else return "clear-btn";
    },
  },
  methods: {
    closePopper() {
      this.isPopperOpen.cancel = false;
        this.isPopperOpen.type = false;
        this.isPopperOpen.price = false;
    },
    togglePopper(value) {
      if (value === "cancel") {
        this.isPopperOpen.cancel = !this.isPopperOpen.cancel;
        this.isPopperOpen.type = false;
        this.isPopperOpen.price = false;
      }
      if (value === "type") {
        this.isPopperOpen.type = !this.isPopperOpen.type;
        this.isPopperOpen.cancel = false;
        this.isPopperOpen.price = false;
      }
      if (value === "price") {
        this.isPopperOpen.price = !this.isPopperOpen.price;
        this.isPopperOpen.type = false;
        this.isPopperOpen.cancel = false;
      }
    },
    toggleDisable() {
      this.isDisabled = !this.isDisabled;
    },
    focusInput(num) {
      if (num === 1) this.$refs.minInput.focus();
      else this.$refs.maxInput.focus();
    },
  },
};
</script>