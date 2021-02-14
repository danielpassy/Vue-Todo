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
      <input type="submit" @click="alertUser" />
    </div>
    <Todo
      @emitit="deleteTodo"
      v-for="todo in todos"
      :data="todo"
      :key="todo.id"
    />
    <div class="todos"></div>
  </div>
</template>

<script>
export default {
  componentes: {},
  data() {
    return {
      todoInput: "",
      todos: [{ description: "hiho", id: 0 }],
    };
  },
  methods: {
    alertUser() {
      const todo = { description: this.todoInput, id: this.todos.length };
      this.todos.push(todo);
      this.todoInput = "";
    },
    deleteTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id)
        
    },
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