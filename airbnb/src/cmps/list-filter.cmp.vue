<template>
  <section class="list-filter">
    <h1>Stays in {{ space }}</h1>
    <div class="buttons-container">
      <popper
        class="mama"
        trigger="click"
        :options="{
          placement: 'bottom-end',
          modifiers: { offset: { offset: '0,10px' } },
        }"
      >
        <div class="popper">
          Only show stays that offer cancellation flexibility
          <el-switch
            v-model="value2"
            active-color="#222222"
            inactive-color="#717171"
          >
          </el-switch>
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
        <div class="popper">
          Only show stays that offer cancellation flexibility
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
        <div class="popper">
          Only show stays that offer cancellation flexibility
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
  data() {
    return {
      value1: true,
      value2: true,
    };
  },
  props: {
    space: String,
  },
};
</script>