<template>
  <v-container>
    <h1>This is an intended Loading Page with loading animation:</h1>
  </v-container>
</template>
<script>
export default {
  /*
   ** programmatically start the loader so we force the page to take x2seconds to load
   */
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000000)
    })
  }
}
</script>
