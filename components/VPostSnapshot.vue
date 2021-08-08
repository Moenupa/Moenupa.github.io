<template>
  <v-card>
    <v-img-lottie :img="{ src: article.content.img.url, slug: article.slug, type: 0 }">
    </v-img-lottie>
    <v-card-title>
      {{ article.content.title || 'title err' }}
      <v-btn
        icon
        color="teal accent-4"
        :to="{ path: `/blog/${article.slug}`, params: { slug: article.slug } }"
        nuxt
        ><v-icon>mdi-open-in-new</v-icon></v-btn
      >
    </v-card-title>
    <v-card-subtitle>
      by {{ (article.content.authors.map(s => s.name)||[]).toString() || 'anonymous' }}
    </v-card-subtitle>
    <v-card-text>
      {{ article.content.description || "" }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    article: Object,
    default: () => {}
  },
  data() {
    return {
    };
  }
};
</script>
