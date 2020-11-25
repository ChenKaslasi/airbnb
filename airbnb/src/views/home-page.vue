<template>
  <div class="home">
    <input type="text">
    <button @click="goToList">push</button>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods:{
    goToList(){
      this.$router.push('/NewYork')
    }
  }

}
</script>
