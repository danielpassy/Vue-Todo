<template>
  <v-toolbar>
    <NuxtLink id="noDecoration" to="/"
      ><v-toolbar-title>Almojanta</v-toolbar-title>
    </NuxtLink>
    <form @submit="searchEntry">
      <v-text-field
        class="searchField"
        hide-details
        single-line
        v-model="searchText"
      ></v-text-field>
    </form>
    <v-icon @click="searchEntry">mdi-magnify</v-icon>

    <v-spacer />

    <v-btn icon @click="openCart = !openCart">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="" dark v-bind="attrs" v-on="on" :left="true">
            <v-icon>mdi-cart</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item key="index">
            <v-list-item-title
              ><div>{{ $store.getters.getCartPortionsQuantity() }}</div>
              <div>Porções</div>
              <div>
                <NuxtLink to="/cart">Fazer Checkout</NuxtLink>
              </div></v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>
    <v-btn
      v-if="!logged_user"
      text
      dark
      ripple
      class="ma-0 ml-5"
      @click="open_login_dialog($event)"
      >Login</v-btn
    >

    <login-dialog ref="login_dialog" />
    <v-menu v-if="logged_user" offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" class="ma-0 ml-5">
          <v-avatar size="36px">
            <img
              src="https://graph.facebook.com/4/picture?width=300&height=300"
            />
          </v-avatar>
        </v-btn>
      </template>
      <v-card class="no-padding">
        <v-list two-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-avatar>
                <img
                  src="https://graph.facebook.com/4/picture?width=300&height=300"
                />
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title
                >{{ logged_user.first_name }}
                {{ logged_user.last_name }}</v-list-item-title
              >
              <v-list-item-subtitle>{{
                logged_user.email
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider />
        <v-list>
          <v-list-item @click="logout()">
            <v-list-item-content>
              <v-list-item-title>Log out</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-toolbar>
</template>

<script>
import Snacks from "~/helpers/Snacks.js";
import api from "~api";

export default {
  data: () => ({
    openCart: true,
    searchText: "",
  }),
  props: ["state"],
  computed: {
    logged_user() {
      return this.$store.state.auth.currentUser;
    },
  },
  methods: {
    open_login_dialog(evt) {
      this.$refs.login_dialog.open();
      evt.stopPropagation();
    },
    async logout() {
      await api.logout();
      this.$store.commit("auth/setCurrentUser", null);
      Snacks.show(this.$store, { text: "Até logo!" });
    },
    searchEntry(){
      alert("to be implemented")

    }
  },
};
</script>

<style>
#noDecoration {
  text-decoration: none !important;
  color: inherit;
  padding-right: 50px;
}

.searchField {
  max-width: 250px !important;
}
</style>