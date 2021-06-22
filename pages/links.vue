<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="6" sm="4" lg="3" v-for="(item, index) in links" :key="index">
        <v-card max-width="374" min-width="240">
          <v-img
            height="250"
            :src="item.img ? item.img : source + '?' + item.name"
          ></v-img>

          <v-card-title class="text-capitalize">{{ item.name }}</v-card-title>

          <v-card-text>
            <div>{{ item.description }}</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn
              v-bind="isLocal(item.link) ? {to: item.link, nuxt} : {href: item.link}"
              text
              :color="`purple ${
                $vuetify.theme.dark ? 'lighten-2' : 'darken-2'
              }`"
              >visit
            </v-btn>
            <v-btn
              text
              :color="`blue ${$vuetify.theme.dark ? 'darken-3' : 'lighten-2'}`"
              v-for="extra in item.extras"
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
  head: {
    title: "Navigation Page",
    meta: [
      { hid: "keywords", name: "keywords", content: "Moenupa" },
      { hid: "keywords", name: "keywords", content: "Link Navigation Roadmap" },
      {
        hid: "description",
        name: "description",
        content: "Roadmap of Moenupa's Website",
      },
    ],
  },
  data() {
    return {
      source: "https://source.unsplash.com/random/",
      links: [],
    };
  },
  methods: {
    isLocal(url) {
      return url.charAt(0) == '/';
    }
  },
  async fetch() {
    const homepage_gist =
      "https://gist.githubusercontent.com/Moenupa/3c84c5c4d627330cd6a16df84a051877/raw";
    this.links = await fetch(homepage_gist + "/links.json").then((res) =>
      res.json()
    );
  },
  layout: "simple",
};
</script>
