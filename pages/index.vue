<template>
  <div id="main">
    <div id="flex">
      <br />
      <form v-on:submit.prevent="putrecipes()">
        <input type="submit" />
      </form>
      <br />
      <form v-on:submit.prevent="getrecipe()">
        <input type="submit" />
      </form>
      <br />
      <form v-on:submit.prevent="print()">
        <input type="submit" />
      </form>
    </div>
    <div class="recipes">
        <RecipeCard v-bind:recipe="recipes[0]" />
    </div>
    <div class="todos"></div>
  </div>
</template>

<script>
import { mapMutations } from "Vuex";
import axios from "axios";
import { recipes } from "~/helpers/apimock/recipes";

export default {
  componentes: {},
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    },
  },
  data() {
    return {
      todoInput: "",
    };
  },

  async asyncData({ params, store, redirect }) {
    // only fetch data on first page load
    if (!store.state.initialized) {
      try {
        let data = recipes;
        store.commit("addManyRecipes", data);
        store.commit("initialize");
      } catch (error) {
        console.log(error);
      }
    }
  },
  async fetch() {},
  methods: {
    putrecipes() {
      this.$store.commit("addManyRecipes", recipes);
    },
    getrecipe() {
      let a = this.$store.getters.getRecipe(1);
      console.log(a);
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