<template>
  <v-card>
    <v-img
      height="250"
      :lazy-src="$themer.gallery.loading"
      :src="$themer.gallery.get(article.img, article.slug)"
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <!-- <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular> -->
          <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_czmjkzqg.json"  background="transparent" speed="1" loop autoplay></lottie-player>
        </v-row>
      </template>
    </v-img>
    
    <v-card-title v-if="article.title">
      {{ article.title }}
      <v-btn
        icon
        color="teal accent-4"
        :to="{ name: 'blog-slug', params: { slug: article.slug } }"
        nuxt
      ><v-icon>mdi-open-in-new</v-icon></v-btn>
    </v-card-title>
    <v-card-subtitle v-if="article.authors">
      by {{ article.authors.join(', ') }}
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
        backgroundColor: '#fff',
        backgroundStyle: 'color',
        theme: {
          controlsView: "standard",
          active: "light",
          light: {
            color: '#3D4852',
            backgroundColor: '#fff',
            opacity: '0.7',
          },
          dark: {
            color: '#fff',
            backgroundColor: '#202020',
            opacity: '0.7',
          }
        }
      }
    }
  }
}
</script>