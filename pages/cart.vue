<template>
  <div class="container">
    <h1>Itens</h1>

    <div class="itens">
      <table style="width: 100%">
        <tr>
          <th></th>
          <th>Receita</th>
          <th colspan="2">Quantidade</th>
        </tr>
        <tr v-for="recipe in recipes" v-bind:key="recipe.id">
          <th>
            <img class="thumbnail" :src="recipe.img" alt="" />
          </th>
          <th>{{ recipe.name }}</th>
          <th>
            <v-text-field
              v-bind:value="cart[recipe.id]"
              class="centered-input text--darken-3 mt-3"
              @input="changeItemQuantity($event, recipe.id)"
              type="text"
              name=""
              id=""
            ></v-text-field>
          </th>
        </tr>
      </table>
    </div>
    <h1>Lista de compras</h1>
    <div class="lista de compras">
      <table style="width: 100%">
        <tr>
          <th>item</th>
          <th colspan="1">Quantidade</th>
          <th colspan="1"></th>
        </tr>
        <tr v-for="(value, name) in ingredients" v-bind:key="value">
          <th>{{ name }}</th>
          <th>
            {{
              (Number.isInteger(value) ? value / 1000 : value) +
              (Number.isInteger(value) ? " kg" : "")
            }}
          </th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "Vuex";

export default {
  computed: {
    ingredients() {
      return this.$store.getters.getIngredients();
    },
    recipes() {
      return this.$store.getters.getCartRecipes();
    },
    cart() {
      return this.$store.getters.getCart();
    },
  },
  methods: {
    changeItemQuantity(value, id) {
      // Change item cart quantity according to input
      if (Boolean(value)) {
        this.$store.commit("changeItemCart", {
          id: id,
          newValue: Number(value),
        });
      }
      this.$forceUpdate();
    },
    ...mapMutations(["changeItemCart"]),
  },
  data() {
    return {
      headers: ["item", "quantity"],
    };
  },
};
</script>

<style>
.container {
  align-items: center;
  min-height: 50vw;
}
.thumbnail {
  width: 150px;
}
.centered-input input {
  text-align: center;
}
.v-input__control{
  max-width: 100px;
}
.v-input{
  justify-content: center;
}
</style>