<template>
  <v-app :style="`background: linear-gradient(${$vuetify.theme.dark ? '#33333333, #333333cc 80%' : '#cccccc33, #cccccccc 80%'}),left top / cover url(/img/87535316_p0.png) no-repeat fixed;`">
    <v-main>
      <Nuxt />
      <FunctionBar />
    </v-main>
  </v-app>
</template>

<style>
*::-webkit-scrollbar {
  width: .8rem;
  height: .4rem;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background-color: rgba(144,144,144,.5);
  border-radius: .2rem;
}
body::-webkit-scrollbar {
  display: none;
}
body {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

<script>
export default {
  methods: {
    initDarkMode() {
      const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      darkMediaQuery.addEventListener('change', (e) => {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      });

      if (darkMediaQuery.matches) {
        setTimeout(() => this.$vuetify.theme.dark = true, 0);
      }
    }
  },
  mounted() {
    this.initDarkMode();
  }
}
</script>