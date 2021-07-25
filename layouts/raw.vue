<template>
  <Nuxt />
</template>

<script>
export default {
  mounted() {
    this.$themer.darkmode.init();
  }
};
</script>
