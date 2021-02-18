<template>
  <div class="extraMargin">
    <v-card
      elevation="2"
      outlined
      shaped
      style="margin: 10px; background-color: transparent"
      min-width="135px"
      max-width="280px"
    >
      <v-img height="100px" :src="recipe.img" alt=""></v-img>

      <v-card-title class="text-center">
        {{ recipe.name }}
      </v-card-title>

      <div class="methods">
        <v-card
          class="d-flex flex-row mb-6"
          :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
          flat
          tile
        >
          <v-card class="pa-2" outlined tile align="center">
            <v-icon
              @click="
                $store.commit('changeItemCart', {
                  id: recipe.id,
                  newValue: $store.getters.getCartRecipeQuantity(recipe.id) - 1,
                })
              "
            >
              mdi-minus</v-icon
            >

            {{ $store.getters.getCartRecipeQuantity(recipe.id) }}

            <v-icon
              @click="
                $store.commit('changeItemCart', {
                  id: recipe.id,
                  newValue: $store.getters.getCartRecipeQuantity(recipe.id) + 1,
                })
              "
              >mdi-plus</v-icon
            >
          </v-card>
        </v-card>
      </div>

      <v-card-actions>
        <v-btn
          text
          @click="$router.push(`/${recipe.id}`)"
          color="white accent-4"
        >
          Leia a Receita Completa
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapMutations } from "Vuex";
export default {
  props: ["recipe"],
  method: {
    getImageLink() {
      return this.recipe.img;
    },
    add() {
      this.$store.commit("changeItemCart", this.recipe.id, 1);
    },
    ...mapMutations(["changeItemCart"]),
  },
};
</script>

<style>
.row + .row {
  margin-top: -12px !important;
}
.extraMargin {
  margin-bottom: 15px;
}
</style>