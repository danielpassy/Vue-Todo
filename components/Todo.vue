<template>
  <div>
    <div id="flex">
      {{ description }} asdasd
      <form><input v-model="checked" type="checkbox" /></form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["description"],
  data() {
    return {
      checked: true,
    };
  },
  methods: {
    deleteTodo() {
      this.$emit("grito", "1");
    },
  },
};
</script>

<style scoped>
#flex {
  display: flex;
}
</style>