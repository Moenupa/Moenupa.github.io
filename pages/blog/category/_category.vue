<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-subtitle>
            <v-avatar>
              <v-img-lottie
                :img="{ src: category.img, slug: category.slug, type: 1, height: -1 }"
              >
              </v-img-lottie>
            </v-avatar>
            <v-btn 
              small
              text
              :color="$themer.color.seeded(category.slug)"
            >
              {{ category.name }}
              <v-icon right>mdi-account-circle</v-icon>
            </v-btn>
            {{ category.bio }}
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
    return {
      title: this.category.name,
      titleTemplate: "Blog - Category: %s",
      meta: [
        ...this.$utils.meta.get({
          keywords: `${this.category.name},blog,post`,
          title: `Blog Category: ${this.category.name}`,
          description: `posts by ${this.category.name}`,
          image: this.$themer.gallery.get({ src: this.category.img, slug: this.category.name }),
          url:
            `${process.env.BASE_URL || "http://localhost:3000"}${this.$route
              .path || ""}` || ""
        })
      ]
    };
  },
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  async asyncData({ $content, params }) {
    const categories = await $content('categories')
      .without('body')
      .sortBy('createdAt', 'asc')
      .where({ name: { $containsAny: params.category } })
      .fetch()
    const category = categories[0] || {}
    const articles = await $content('articles', params.slug)
      .without('body')
      .sortBy('createdAt', 'asc')
      .where({ authors: { $containsAny: params.author } })
      .fetch()
    return {
      articles,
      category
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
