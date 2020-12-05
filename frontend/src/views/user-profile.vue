<template>
  <section class="user-profile main-layout main-content">
    <space-header />
    <header>
      <h1 >Trips</h1>
      <!-- <pre>{{ orders }}</pre> -->
    </header>
      <ul v-if="ordersForDisplay" class="order-container">
        <li v-for="order in ordersForDisplay" :key="order._id" class="order-card">
          <!-- {{order}} -->
          <img :src="order.imgUrl">
          <small>{{order.dates.checkIn}}-{{order.dates.checkOut}}</small>
          <h3>{{order.city}}</h3>
          <h3>{{order.spaceName}}</h3>
        </li>
      </ul>
  </section>
</template>

<script>
import spaceHeader from "../cmps/space-header.cmp.vue";
export default {
  components: { spaceHeader },
  data() {
    return {
      user: null,
      orders: [],
    };
  },
  created() {
    this.user = JSON.parse(JSON.stringify(this.$store.getters.loggedinUser));
    console.log("USER", this.user._id);
    this.setOrdersProfile({ id: this.user._id });
  },
  computed:{
    ordersForDisplay(){
      return this.$store.getters.ordersForDisplay

    }
  },
  methods: {
    async setOrdersProfile(filterBy) {
      console.log("filterBy from user-profile cmp : ", filterBy.id);
      const filterId=filterBy.id
      console.log('filterId',filterId)
      this.orders = await this.$store.dispatch({
        type: "filterProfile",
        filterId,
      });
      console.log(this.orders,'orderArray');

    },
  },
};
</script>