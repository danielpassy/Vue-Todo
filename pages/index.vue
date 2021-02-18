<template>
  <div id="main">
    <div id="flex">
    </div>
    <v-container style="width: 90%">
      <v-layout row wrap>
        <v-row v-for="recipe in recipes" :key="recipe.id" >
          <RecipeCard v-bind:recipe="recipe" />
        </v-row>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapMutations, mapState } from "Vuex";

export default {
  componentes: {},
  computed: {
    ...mapState(["recipes"]),
  },
  data() {
    return {
      todoInput: "",
    };
  },
  methods: {
    putrecipes() {
      this.$store.getters.getIngredients();
    },
    ...mapMutations(["addManyRecipes", "initialize"]),
  },
};
</script>

<style>
#main {
  min-height: 80vh;
}
#flex {
  display: flex;
}
.container {
  align-items: center;
  width: 80vw;
}
</style>