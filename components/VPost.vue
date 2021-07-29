<template>
  <div class="v-post" v-html="$md.render(text)"></div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/post/_index";
</style>
