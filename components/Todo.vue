<template>
  <div>
    <div id="flex">
      {{ data.description }}
      <form>
        <input v-model="checked" type="checkbox" />
      </form>
      <input type="submit" value='delete' @click="deleteTodo()">
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["data"],
  data() {
    return {
      checked: true,
    };
  },
  methods: {
    deleteTodo() {
      console.log("hi")
      this.$emit("emitit", this.data.id);
    },
  },
};
</script>

<style scoped>
#flex {
  display: flex;
}
</style>