<template>
  <v-footer :inset="mod.inset ? true : false" :fixed="mod.fixed ? true : false">
    <v-chip-group class="float-right">
      <v-chip 
        v-for="chip of chips" :key="chip.id"
        :href="`${chip.link}${chip.linkpin ? '' : $nuxt.$route.path}`"
      >
        <v-icon v-if="chip.icon">
          {{ chip.icon }} 
        </v-icon>
        <span v-if="chip.icon" class="text-button pl-2">
          {{ chip.title }}
        </span>
        <img
          v-else
          :src="`/img/${chip.title}-${$vuetify.theme.dark ? 'dark' : 'light'}.svg`"
          :style="`${chip.style ? chip.style : 'height: 60%'}; width: auto`"
        >
        <v-divider vertical class="mx-2"></v-divider>
        <span v-if="chip.type" class="text-button">{{ chip.type }}</span>
      </v-chip>
    </v-chip-group>
  </v-footer>
</template>

<script>
export default {
  props: {
    mod: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      chips: [
        // {
        //   title: "github",
        //   type: "static",
        //   link: "https://moenupa.github.io",
        // },
        {
          title: "netlify",
          type: "static",
          link: "https://moenupa.netlify.app",
          style: "height: 60%"
        },
        {
          title: "vercel",
          type: "ssr",
          link: "https://homepage-moenupa.vercel.app",
          style: "height: 50%"
        },
        {
          title: "edit",
          icon: "mdi-comment-edit",
          type: "source",
          link: "https://github.com/Moenupa/homepage/tree/master/content/articles",
          linkpin: true
        }
      ]
    }
  }
}
</script>