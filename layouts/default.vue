<template>
  <v-app>
    <v-main class="d-flex justify-center align-center">
      <Nuxt />
      <FunctionBar />
    </v-main>
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.$themer.darkmode.init();
  }
};
</script>
