<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="img"></v-img>

    <v-card-title>{{ name }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 subtitle-1"></div>

      <div v-for="ingredient in ingredients" :key="ingredient.id">
        {{ ingredient.quantity }} {{ ingredient.unit }} - {{ ingredient.name }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Modo de Preparo</v-card-title>

    <v-card-text>
      {{ description }}
    </v-card-text>

    <v-card-actions>
      <v-icon
        @click="
          $store.commit('changeItemCart', {
            id: id,
            newValue: $store.getters.getCartRecipeQuantity(id) - 1,
          })
        "
      >
        mdi-minus</v-icon
      >

      {{ $store.getters.getCartRecipeQuantity(id) }}

      <v-icon
        @click="
          $store.commit('changeItemCart', {
            id: id,
            newValue: $store.getters.getCartRecipeQuantity(id) + 1,
          })
        "
        >mdi-plus</v-icon
      >
      <v-spacer></v-spacer>
      <v-btn outlined rounded text to='/'> Voltar </v-btn>
      <v-btn outlined rounded text to='/cart'> Ver Carrinho </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapMutations } from "Vuex";

export default {
  async asyncData({ params, store, route }) {
    let recipe = store.getters.getRecipe(route.params.id);
    return recipe;
  },

  methods: {
    ...mapMutations(["changeItemCart"]),
    asd(id) {
      this.delTodo(id);
      this.$router.push(`/`);
      this.todo = this.$store.getters.getTodo(id);
    },
  },
};
</script>

<style>
</style>