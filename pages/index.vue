<template>
  <div class="container">
    <div id="flex">
      <form>
        <input
          type="text"
          placeholder="Insert your Todo"
          v-model="todoInput"
          name="todo"
          id="todo"
        />
      </form>
      <input type="submit" @click="alertUser()" />
    </div>
    <Todo
      @emitit="delTodo"
      v-for="todo in todos"
      :data="todo"
      :key="todo.id"
    />
    <div class="todos"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "Vuex";

export default {
  componentes: {},
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  data() {
    return {
      todoInput: "",
    };
  },
  methods: {
    alertUser() {
      this.addTodo(this.todoInput);
      this.todoInput = "";
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