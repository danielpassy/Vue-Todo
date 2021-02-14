<template>
  <div class="container">
    <div id="flex">
      <form v-on:submit.prevent="createTodo">
        <input
          type="text"
          placeholder="Insert your Todo"
          v-model="todoInput"
          name="todo"
          id="todo"
        />
        <input type="submit"  />
      </form>
    </div>
    <Todo @emitit="delTodo" v-for="todo in todos" :data="todo" :key="todo.id" />
    <div class="todos"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "Vuex";

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
  methods: {
      createTodo(){
          this.addTodo(this.todoInput)
          this.todoInput = ""
      },
    ...mapMutations(["addTodo", "delTodo"]),
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