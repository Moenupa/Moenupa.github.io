<template>
  <v-app>
    <v-main class="d-flex justify-center align-center" :style="`background: linear-gradient(${$vuetify.theme.dark ? '#33333333, #333333cc 80%' : '#cccccc33, #cccccccc 80%'}),left top / cover url(/img/main_md.png) no-repeat fixed;`">
      <Nuxt />
      <FunctionBar />
    </v-main>
  </v-app>
</template>

<style>
</style>

<script>
export default {
  mounted() {
    this.$themer.darkmode.init();
  }
}
</script>