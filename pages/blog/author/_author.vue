<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-subtitle>
            <v-avatar>
              <v-img-lottie
                :img="{ src: author.img, slug: author.slug, type: 1, height: -1 }"
              >
              </v-img-lottie>
            </v-avatar>
            <v-btn 
              small
              text
              :color="$themer.color.seeded(author.slug)"
              v-bind="author.home.charAt(0) == '/' ? {to: author.home, nuxt: true} : {href: author.home}"
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
        v-for="mCol in masonary()"
        :key="mCol"
      >
        <v-expand-transition
          v-for="article of articles"
          :key="article.slug"
        >
          <v-post-snapshot
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
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
export default {
  head() {
    const title = `${this.author.name}`;
    const titleTemplate = `Blog - Author: %s`
    const keywords = `${this.author.name}, moenupa, blog, post`
    const description = `posts by ${this.author.name}`
    const meta = [
      { hid: "keywords", name: "keywords", content: keywords },
      { hid: "description", name: "description", content: description }
    ]
    return {
      title,
      titleTemplate,
      meta
    }
  },
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  async asyncData({ $content, params }) {
    const authors = await $content('authors')
      .without('body')
      .sortBy('createdAt', 'asc')
      .where({ name: { $containsAny: params.author } })
      .fetch()
    const author = authors[0] || {}
    const articles = await $content('articles', params.slug)
      .without('body')
      .sortBy('createdAt', 'asc')
      .where({ authors: { $containsAny: params.author } })
      .fetch()
    return {
      articles,
      author
    }
  },
  methods: {
    filter(slug, col) {
      return this.$themer.masonary.filter(slug, col, this.articles, this.masonary())
    },
    masonary() {
      return this.$themer.masonary.cols(this.$vssWidth);
    }
  },
  layout: 'blog'
}
</script>
