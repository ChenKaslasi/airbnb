<template>
  <section class="login-cmp">
    <header class="login-header">
      <button @click="emitClose">&#10005;</button>
      <h2 v-if="isLogin">Log in</h2>
      <h2 v-else>Sign up</h2>
    </header>
    <main>
      <div class="form-container">
        <form @submit.prevent="sendUserCred">
          <div class="input-container">
            <div v-if="!isLogin" class="username-container">
              <input
                v-model="user.username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="email-container">
              <input v-model="user.email" type="text" placeholder="Email" />
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
  props: {
    isLogin: Boolean,
  },
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
      loggedInUser: "",
    };
  },
  methods: {
    async sendUserCred() {
      if (
        (!this.isLogin && !this.user.username) ||
        !this.user.password ||
        !this.user.email
      ) {
        console.log("Fill all cred");
        return;
      }
      const res = await this.$store.dispatch({
        type: this.isLogin ? "login" : "signup",
        userCred: this.user,
      });
      if (res.err) {
        console.log("err", res.err);
      }
    },
    emitClose() {
      this.$emit("close", close);
    },
  },
};
</script>