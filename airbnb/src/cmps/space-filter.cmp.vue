<template>
  <section>
    <div class="cover">
      <form class="flex-form">
        <input
          type="search"
          placeholder="Where do you wanna go?"
          v-model="filterBy"
        />
        <label class="label-search" for="from">From</label>
        <input type="date" name="from" />
        <label class="label-search" for="to">To</label>
        <input type="date" name="to" />
        <select name="guests" id="guests">
          <option value="1">1 guest</option>
          <option value="2">2 guests</option>
          <option value="3">3 guests</option>
          <option value="4">4 guests</option>
          <option value="5">5 guests</option>
        </select>

        <input
          type="submit"
          class="search-btn"
          value="Search"
          @click="emitFilter"
        />
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: null,
    };
  },
  methods: {
    emitFilter() {
      this.$emit("filter", this.filterBy);
      console.log("filter", this.filterBy);
    },
  },
};
</script>

<style lang="scss">
.cover {
  // background: #cac1bc;
  // position: sticky;
  width: 100vw;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-form {
  display: flex;
  // width: 100%;

}

input[type="search"] {
  flex-basis: 350px;
  border-radius: 30px 0px 0px 30px;
}

.flex-form > * {
  border: 0;
  padding: 10px;
  line-height: 50px;
  font-size: 20px;
  border-radius: 0;
  outline: 0;
  background: #fff;
  margin-left: 1px;
}

.flex-form input[type="submit"] {
  background: #f05;
  color: white;
  border-radius:  0px 30px 30px 0px ;

}
</style>