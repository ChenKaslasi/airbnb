<template>
  <section>
    <div class="cover ">
      <form class="flex-form">
        <input
          type="search"
          placeholder="Where To?"
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

        <button
          class="search-btn"
          @click="emitFilter"
         ><div class="rounder"><img class="search-svg" src='../assets/icons/search_m.svg' /></div></button> 
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
.search-svg{
  height: 22px;
}
.cover {
  margin-top: 80px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-form {
  display: flex;
  // width: 100%;
  max-width: 1000px;
  max-height: 75px;

}

input[type="search"] {
  flex-basis:inherit;
  border-radius: 30px 0px 0px 30px;
}

.flex-form > * {
  border: 0;
  padding: 15px;
  line-height: 50px;
  font-size: 20px;
  // border-radius: 0;
  font-family: Circular;
  outline: 0;
  background: rgb(255, 255, 255);
  // margin-left: 1px;
}

.flex-form .search-btn {
  background: #f05;
  color: white;
  // padding: 15px;
  border-radius:  0px 30px 30px 0px ;

}
// .rounder{
  // background-color: aqua;
  // padding: 8px;
  // border-radius:  50% ;
// }
</style>