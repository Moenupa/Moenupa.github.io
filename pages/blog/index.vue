<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-expand-transition>
          <v-img v-show="loading" :height="(windowSize[0] - 640) / 2" />
        </v-expand-transition>
        <v-card>
          <v-parallax
            :lazy-src="$themer.gallery.loading"
            src="/img/main_md.png"
            class="my-16"
            :height="loading? '500': '300'"
            contain
          >
            <v-container class="d-flex flex-column justify-center align-center">
              <div class="text-h2 mb-4">Moenupa's Blog</div>
              <v-chip-group v-model="filters" multiple>
                <v-chip label filter
                  v-for="tag of tags" :key="tag.slug"
                  :color="$themer.color.seeded(tag.slug, true)"
                  @click="onLoad"
                >
                  {{ tag.name }}
                  <v-icon right>mdi-tag-text-outline</v-icon>
                </v-chip>
              </v-chip-group>
            </v-container>
          </v-parallax>
        </v-card>
        <v-expand-transition>
          <v-img v-show="loading" :height="(windowSize[0] - 640) / 2" />
        </v-expand-transition>
      </v-col>
    </v-row>
    <v-row justify="center" v-show="!loading">
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
    <v-snackbar
      v-model="snackbar"
      :multi-line="true"
    >
      <v-chip-group v-model="filters" multiple>
        <v-chip label filter
          v-for="tag of tags" :key="tag.slug"
          :color="$themer.color.seeded(tag.slug, true)"
          @click="onLoad"
        >
          {{ tag.name }}
          <v-icon right>mdi-tag-text-outline</v-icon>
        </v-chip>
      </v-chip-group>
      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          icon
          v-bind="attrs"
          @click="snackbar = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
export default {
  head: {
    title: "Blog",
    meta: [
      { hid: "keywords", name: "keywords", content: `post, moenupa, blog` },
      { hid: "description", name: "description", content: `posts in Moenupa's blog` }
    ],
    script: [
      
    ]
  },
  data() {
    return {
      windowSize: [],
      filtering: false,
      filters: [],
      chunks: [],
      snackbar: false,
      loading: true,
      tagFilter: (article) => {return this.filters.every(val => article.tags.includes(this.tags[val].name));}
    }
  },
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  methods: {
    filter(slug, col) {
      return this.$themer.masonary.filter(slug, col, this.chunks, this.masonary())
    },
    onLoad() {
      setTimeout(() => {this.filtering = true; window.scrollTo({ top: 0, behavior: 'smooth' });}, 0);
      setTimeout(() => this.chunks = this.articles.filter(this.tagFilter), 100);
      setTimeout(() => this.filtering = false, 400);
    },
    onScroll() {
      this.snackbar = !this.loading;
    },
    masonary() {
      return this.$themer.masonary.cols(this.$vssWidth);
    }
  },
  mounted() {
    setTimeout(() => this.chunks = this.articles.filter(this.tagFilter), 50);
    this.$nextTick(() => {
      window.addEventListener('scroll', this.onScroll);
    })
  },
  created() {
    setTimeout(() => this.loading = false, 2000);
  },
  beforeDestroy() { 
    window.removeEventListener('scroll', this.onScroll);
  },
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'authors', 'tags'])
      .sortBy('createdAt', 'desc')
      .fetch()
    const tags = await $content('tags', params.slug)
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      tags
    }
  },
}
</script>