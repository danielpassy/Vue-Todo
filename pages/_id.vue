<template>
  <div>
    You came to the the page of the following task:
    <Todo @emitit="asd" :data="todo" v-if="todo" :key="todo.id" />
  </div>
</template>

<script>
import { mapMutations } from "Vuex";

export default {
  async asyncData({ params, store }) {
    let todo = { todo: store.getters.getTodo(params.id) };
    return todo;
  },
  validate({ params, store }) {
    return store.getters.getTodo(params.id);
  },
  methods: {
    ...mapMutations(["addTodo", "delTodo"]),
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