<template>
  <v-footer :inset="mod.inset ? true : false" :fixed="mod.fixed ? true : false">
    <v-chip-group class="mr-8" column>
      <v-chip
        small
        label
        v-for="chip of chips"
        :key="chip.id"
        :href="`${chip.link}${chip.linkpin ? '' : $nuxt.$route.path}`"
      >
        <v-icon
          v-if="chip.icon"
          :color="`${chip.color}${$themer.color.adjust()}`"
        >
          {{ chip.icon }} mdi-18px
        </v-icon>
        <span
          v-if="chip.icon"
          class="ml-2"
          style="font-weight: 500; letter-spacing: .8px;"
        >
          {{ chip.title.toUpperCase() }}
        </span>
        <img
          v-else
          :src="
            `/logo/${chip.title}-${$vuetify.theme.dark ? 'dark' : 'light'}.svg`
          "
          :style="`${chip.style ? chip.style : 'height: 60%'}; width: auto`"
        />
        <v-chip
          v-if="chip.type"
          small
          label
          :color="$themer.color.seeded(chip.type, true)"
          class="ml-2 mr-n3 px-2"
          >{{ chip.type }}</v-chip
        >
      </v-chip>
    </v-chip-group>
  </v-footer>
</template>

<script>
export default {
  props: {
    mod: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chips: [
        {
          title: "netlify",
          type: "Static",
          link: "https://moenupa.netlify.app",
          style: "height: 70%"
        },
        {
          title: "vercel",
          type: "SSR",
          link: "https://homepage-moenupa.vercel.app",
          style: "height: 58%"
        },
        {
          title: "github pages",
          icon: "mdi-github",
          color: "purple",
          type: "Static",
          link: "https://moenupa.github.io"
        },
        {
          title: "git",
          icon: "mdi-git",
          color: "green",
          type: "Source",
          link:
            "https://github.com/Moenupa/Moenupa.github.io",
          linkpin: true
        },
        {
          title: "by-nc-sa 4.0",
          icon: "mdi-copyright",
          color: "blue-grey",
          type: "Copyright",
          link: "http://creativecommons.org/licenses/by-nc-sa/4.0/",
          linkpin: true
        },
        {
          title: "storyblok",
          style: "height: 72%",
          type: "CMS",
          link: "https://storyblok.com/",
          linkpin: true
        },
        {
          title: "vuetifyjs",
          icon: "mdi-vuetify",
          color: "blue",
          type: "UI",
          link: "https://vuetifyjs.com/",
          linkpin: true
        },
        {
          title: "nuxt",
          icon: "mdi-nuxt",
          color: "green",
          type: "Framework",
          link: "https://nuxtjs.org/",
          linkpin: true
        }
      ]
    };
  }
};
</script>
