<template>
  <v-btn
    :to="
      info.name
        ? `/blog/${info.component}/${info.name}`
        : `/blog`
    "
    :color="$themer.color.seeded(info.name)"
    text
    nuxt
    small
  >
    <v-icon left v-if="info.icon">{{ info.icon }}</v-icon>
    <v-icon left v-else>{{ icon }}</v-icon>
    {{ info.name ? info.name : "info_err" }}
  </v-btn>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {}
    },
    icon: {
      type: String,
      default: () => "mdi-tag-text"
    }
  }
}
</script>