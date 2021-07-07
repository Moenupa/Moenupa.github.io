<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-subtitle>
            <v-avatar>
              <v-img
                :src="tag.img"
                :alt="tag.slug"
              ></v-img>
            </v-avatar>
            <v-btn 
              small
              text
              :color="$themer.color.seeded(tag.slug, true)"
            >
              {{ tag.name }}
              <v-icon right>mdi-tag-text-outline</v-icon>
            </v-btn>
            {{ tag.description }}
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
      masonaryCols: 4
    }
  },
  async asyncData({ $content, params }) {
    const tags = await $content('tags')
      .where({ slug: { $contains: params.tag } })
      .limit(1)
      .fetch()
    const tag = tags.length > 0 ? tags[0] : {}
    const articles = await $content('articles', params.slug)
      .without('body')
      .where({ tags: { $contains: tag.name } })
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      tag
    }
  },
  methods: {
    filter(slug, col) {
      return this.$themer.masonary.filter(slug, col, this.articles, this.masonaryCols)
    },
  }
}
</script>
