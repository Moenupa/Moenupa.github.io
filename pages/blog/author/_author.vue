<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-subtitle>
            <v-avatar>
              <v-img
                :lazy-src="$themer.gallery.loading"
                :src="$themer.gallery.get(author.img, author.slug)"
                :alt="author.slug"
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
                    <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_kJNwM4.json"  background="#ddd" speed="1" loop autoplay></lottie-player>
                  </v-row>
                </template>
              </v-img>
            </v-avatar>
            <v-btn 
              small
              text
              :color="$themer.color.seeded(author.slug)"
              v-bind="author.home.charAt(0) == '/' ? {to: author.home, nuxt} : {href: author.home}"
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
  data() {
    return {
      masonaryCols: 4,
    }
  },
  async asyncData({ $content, params }) {
    const authorsList = await $content('authors')
      .sortBy('createdAt', 'asc')
      .without('body')
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
