<template>
  <div class="container">
    <div>
      <h1 v-if="!$auth.loggedIn">
        <NuxtLink to="/login">Login</NuxtLink>
      </h1>
      <div v-else>
        <p @click="$auth.logout()">Logout</p>
      </div>
    </div>

    <div id="flex">
      <form v-on:submit.prevent="createTodo">
        <input
          type="text"
          placeholder="Insert your Todo"
          v-model="todoInput"
          name="todo"
          id="todo"
        />
        <input type="submit" />
      </form>
    </div>
    <Todo @emitit="delTodo" v-for="todo in todos" :data="todo" :key="todo.id" />
    <div class="todos"></div>
  </div>
</template>

<script>
import { mapMutations } from "Vuex";
import axios from "axios";

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
        let { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        data.forEach((todo) => {
          todo.description = todo.title;
          store.commit("addAPITodo", todo);
        });
        store.commit("initialize");
      } catch (error) {
        redirect("/1/1");
      }
    }
  },
  async fetch() {},
  methods: {
    createTodo() {
      this.addTodo(this.todoInput);
      this.todoInput = "";
    },
    ...mapMutations(["addTodo", "delTodo", "initialize"]),
  },
};
</script>

<style>
#flex {
  display: flex;
}
.container {
  align-items: center;
  width: 80vw;
}
</style>