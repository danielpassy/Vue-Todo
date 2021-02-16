<template>
  <v-container>
    <div><NuxtLink to="/">To home</NuxtLink></div>
    <h1>Login</h1>

    <UserAuthForm buttonText="Login" :submitForm="loginUser" />
  </v-container>
</template>

<script>
import UserAuthForm from "@/components/UserAuthForm";

export default {
  components: {
    UserAuthForm,
  },
  methods: {
    async loginUser(logininfo) {
      try {
        const a = 1
        a = 2
        let response = await this.$auth.loginWith("local", { data: logininfo });
        console.log(response);
      } catch (error) {
        debugger
        this.$store.dispatch("snackbar/setSnackbar", {
          color: "error",
          text: "You must be an admin to view that page.",
        });
      }
    },
  },
};
</script>

<style  scoped>
</style> 