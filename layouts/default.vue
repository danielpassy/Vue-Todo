<template>
  <v-app>
    <TheSnackbar />
    <nuxt />
  </v-app>
</template>

<script>
import TheSnackbar from "@/components/TheSnackbar.vue";
export default {
  components: {
    TheSnackbar,
  },
  methods: {
    asd() {
      alert("hi");
    },
  },
};
</script>
