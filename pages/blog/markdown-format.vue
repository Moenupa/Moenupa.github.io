<template>
  <v-post
    class="py-4 px-sm-4 px-md-8 px-lg-16"
    :text="test"
  >
  </v-post>
</template>

<script>
import md from '/content/articles/format-testing.md'
export default {
  data() {
    return {
      test: md
    }
  }
}
</script>