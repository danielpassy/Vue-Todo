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
    <Todo @grito="removeTodo" description="shalom" />

    <div class="todos"></div>
  </div>
</template>

<script>
export default {
  componentes: {},
  data() {
    return {
      todoInput: "",
      todos: [],
    };
  },
  methods: {
    alertUser(e) {
      this.todos.push(this.todoInput);
      this.todoInput = "";
    },
    removeTodo() {
      alert("someone attempted to delete this");
    },
  },
};
</script>

<style>
#flex {
    display:flex
}
.container{
    align-items: center;
    width: 80vw;

}
</style>