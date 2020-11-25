<template>
  <section>
      <h1>filterrrr</h1>
      <input v-model="filterBy" type="text" />
    <button @click="emitFilter">push</button>
  </section>
</template>

<script>
export default {
  data(){
    return{
      filterBy:null
    }
  },
  methods:{
    emitFilter(){
      this.$emit('filter',this.filterBy)
      console.log('filter', this.filterBy);
    },
  }

}
</script>

<style>

</style>