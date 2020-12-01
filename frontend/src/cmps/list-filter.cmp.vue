<template>
  <section class="list-filter">
    <h1>Stays in {{ space.city }}</h1>
    <div class="buttons-container">
      <popper
        trigger="click"
        :options="{
          placement: 'bottom-end',
          modifiers: { offset: { offset: '0,10px' } },
        }"
      >
        <div class="popper cancel-popper">
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

        <button slot="reference">Cancellation flexibility</button>
      </popper>
      <popper
        trigger="click"
        :options="{
          placement: 'bottom-end',
          modifiers: { offset: { offset: '0,10px' } },
        }"
      >
        <div class="popper type-popper">
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

        <button slot="reference">Type of place</button>
      </popper>
      <popper
        trigger="click"
        :options="{
          placement: 'bottom-end',
          modifiers: { offset: { offset: '0,10px' } },
        }"
      >
        <div class="popper price-popper">
          <div class="popper-content">
            <div @click="focusInput(1)" class="full-input">
              <div>
                <label for="fname">min price</label>
              </div>
              <div class="input-section">
                <span class="dollar">$</span
                ><input ref="minInput" type="number" id="fname" name="fname" placeholder="10" />
              </div>
            </div>
            <span class="hyphen">–</span>
            <div @click="focusInput(2)" class="full-input">
              <div>
                <label for="mama">min price</label>
              </div>
              <div class="input-section">
                <span class="dollar">$</span
                ><input ref="maxInput"
                  type="number"
                  id="mama"
                  name="fname"
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

        <button slot="reference">Price</button>
      </popper>
    </div>
  </section>
</template>

<script>
import Popper from "vue-popperjs";

export default {
  components: {
    popper: Popper,
  },
  props: {
    space: Object,
  },
  data() {
    return {
      value2: false,
      isDisabled: true,
      checked: true,
      checked2: true,
    };
  },
  computed: {
    checkDisabled() {
      if (this.isDisabled) return "clear-btn disabled";
      else return "clear-btn";
    },
  },
  methods: {
    toggleDisable() {
      this.isDisabled = !this.isDisabled;
    },
    focusInput(num) {
      if (num === 1) this.$refs.minInput.focus();
      else this.$refs.maxInput.focus();
    
    }
  },
};
</script>