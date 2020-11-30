<template>
  <section class="login-cmp">
    <header class="login-header">
      <button>&#10005;</button>
      <h2>Log in</h2>
    </header>
    <main>
      <div class="form-container">
        <form @submit.prevent="sendUserCred">
          <div class="input-container">
            <div class="username-container">
              <input
                v-model="user.username"
                type="text"
                placeholder="Username"
              />
            </div>
            <input v-model="user.password" type="text" placeholder="Password" />
          </div>
          <button>Continue</button>
        </form>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async sendUserCred() {
      if (!this.user.username || !this.user.password) {
        console.log("Fill all cred");
        return;
      }
      console.log(this.user);
      const res = await this.$store.dispatch({
        type: "login",
        userCred: this.user,
      });
      if (res.err) {
        console.log("err", res.err);
      }
    },
  },
//   created() {

//   }
};
</script>