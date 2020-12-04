<template>
  <section class="user-profile main-layout main-content">
    <space-header />
    <header>
      <h1>Trips</h1>
      <pre>{{orders}}</pre>
    </header>
    <main>
      <!-- <ul class="card-container">
        <li v-for="space in spaces" :key="space._id">
          <space-preview
            :space="space"
            @click.native="spaceSelected(space._id)"
          ></space-preview>
        </li>
      </ul> -->
    </main>
  </section>
</template>

<script>
import spaceHeader from "../cmps/space-header.cmp";
export default {
  components: { spaceHeader },
  data() {
      return {
          user : null,
          orders:null
      }
  },
  created() {
      this.user = this.$store.getters.loggedinUser;
      this.setOrders({id:this.user._id})
  },
  methods: {
      async setOrders(filterBy) {
        console.log('filterBy from user-profile cmp : ',filterBy);
           this.orders = await this.$store.dispatch({
        type: "filterOrders",
        filterBy,
      });
      }
  }
};
</script>