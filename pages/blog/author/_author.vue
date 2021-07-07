<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-subtitle>
            <v-avatar>
              <v-img
                :src="author.img"
                :alt="author.slug"
              ></v-img>
            </v-avatar>
            <v-btn 
              small
              text
              :color="$themer.color.seeded(author.slug, true)"
            >
              {{ author.name }}
              <v-icon right>mdi-account-circle</v-icon>
            </v-btn>
            {{ author.bio }}
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="mCol in masonaryCols"
        :key="mCol"
      >
        <v-expand-transition
          v-for="article of articles"
          :key="article.slug"
        >
          <PostSnapshot
            :article="article" 
            v-show="filter(article.slug, mCol)"
            class="mb-6"
          />
        </v-expand-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      masonaryCols: 2,
    }
  },
  async asyncData({ $content, params }) {
    const authorsList = await $content('authors')
      .sortBy('createdAt', 'asc')
      .only(['name', 'bio', 'img', 'slug'])
      .where({ name: { $containsAny: params.author } })
      .fetch()
    const author = authorsList[0] || {}
    const articles = await $content('articles', params.slug)
      .where({ authors: { $containsAny: params.author } })
      .without('body')
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      author
    }
  },
  methods: {
    filter(slug, col) {
      return this.$themer.masonary.filter(slug, col, this.articles, this.masonaryCols)
    }
  }
}
</script>
