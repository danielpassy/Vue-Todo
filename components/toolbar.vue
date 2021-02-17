<template>
  <v-toolbar>
    <v-toolbar-title>Almojanta</v-toolbar-title>
    <v-text-field class="hello" label="Solo" solo dense></v-text-field>
    <v-btn icon @click="searching = !searching">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-spacer />
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
    <v-btn icon @click="searching = !searching">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="" dark v-bind="attrs" v-on="on" left='true'>
            <v-icon>mdi-cart</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item key="index">
            <v-list-item-title><div>hi</div><div>hello</div></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>
  </v-toolbar>
</template>

<script>
import Snacks from "~/helpers/Snacks.js";
import api from "~api";

export default {
  data: () => ({
    searching: true,
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
  },
};
</script>
