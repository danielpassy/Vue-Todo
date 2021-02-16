<template>
  <v-container>
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
        let response = await this.$auth.loginWith('local', { data: logininfo });
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style  scoped>
</style> 