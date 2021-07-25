<template>
  <v-card>
    <v-img-lottie :img="{ src: article.img, slug: article.slug, type: 0 }">
    </v-img-lottie>
    <v-card-title v-if="article.title">
      {{ article.title }}
      <v-btn
        icon
        color="teal accent-4"
        :to="{ name: 'blog-slug', params: { slug: article.slug } }"
        nuxt
        ><v-icon>mdi-open-in-new</v-icon></v-btn
      >
    </v-card-title>
    <v-card-subtitle v-if="article.authors">
      by {{ article.authors.toString() }}
    </v-card-subtitle>
    <v-card-text v-if="article.description">
      {{ article.description }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    article: Object
  },
  data() {
    return {
      options: {
        minimizable: false,
        playerSize: "standard",
        backgroundColor: "#fff",
        backgroundStyle: "color",
        theme: {
          controlsView: "standard",
          active: "light",
          light: {
            color: "#3D4852",
            backgroundColor: "#fff",
            opacity: "0.7"
          },
          dark: {
            color: "#fff",
            backgroundColor: "#202020",
            opacity: "0.7"
          }
        }
      }
    };
  }
};
</script>
