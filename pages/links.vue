<template>
  <v-container class="d-flex align-center justify-center">
    <v-row justify="space-around">
      <v-col cols="6" sm="4" lg="3" v-for="link in links" :key="link.id">
        <v-card max-width="374" min-width="240">
          <v-img-lottie
            :img="{ src: null, slug: link.name, type: 0 }"
          ></v-img-lottie>

          <v-card-title class="text-capitalize">{{ link.name }}</v-card-title>

          <v-card-text>
            {{ link.description }}
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn
              v-bind="isLocal(link.link) ? {to: link.link, nuxt: true} : {href: link.link}"
              text
              :color="$themer.color.seeded('visit')"
              >visit
            </v-btn>
            <v-btn
              text
              :color="$themer.color.seeded(extra.name)"
              v-for="extra in link.extras"
              :key="extra.id"
              :href="extra.link"
              ><v-icon left v-if="extra.icon">{{ extra.icon }}</v-icon
              >{{ extra.name }}</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
</style>

<script>
export default {
  head() {
    return {
      title: "Navigation Page",
      meta: [
        ...createSEOMeta({
          keywords: "navigation,links,roadmap,sitemap",
          title: "Navigation Page",
          description: "Roadmap of Moenupa's Website",
          image: "",
          url: `${process.env.BASE_URL || 'http://localhost:3000'}${this.$route.path || ""}` || "",
        }),

      ]
    }
  },
  data() {
    return {
      source: "https://source.unsplash.com/random/",
      links: [
        {
          "name":"homepage",
          "description":"My personal homepage. Contains nearly everything you'll need to know about me.",
          "link":"/",
          "extras":[
            {
              "icon":"mdi-github",
              "name":"github",
              "link":"https://github.com/Moenupa/homepage"
            }
          ]
        },
        {
          "name":"about",
          "description":"Page for information and acknowledgement.",
          "link":"/about",
          "extras":[
            {
              "icon":"mdi-github",
              "name":"source",
              "link":"https://github.com/Moenupa/homepage"
            }
          ]
        },
        {
          "name":"blog",
          "description":"A blog of my own study record. [in development]",
          "link":"/blog",
          "extras":[
            {
              "icon":"mdi-github",
              "name":"source",
              "link":"https://github.com/Moenupa/homepage/tree/master/content"
            }
          ]
        }
      ],
    };
  },
  mounted() {
  },
  methods: {
    isLocal(url) {
      return url.charAt(0) == '/';
    }
  }
};
</script>
