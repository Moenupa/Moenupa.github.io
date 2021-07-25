<template>
  <v-app>
    <v-main class="d-flex justify-center align-center">
      <v-fade-transition>
        <Nuxt style="min-height: calc( 100vh - 60px )" />
      </v-fade-transition>
      <FunctionBar />
      <v-footer-blog :mod="{}"></v-footer-blog>
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
