<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-card>
          <v-parallax
            :lazy-src="$themer.gallery.loading"
            src="/img/main_md.png"
            class="my-16"
            :height="loading ? '500' : '300'"
            contain
          >
            <v-container class="d-flex flex-column justify-center align-center">
              <div class="text-h2 mb-4">Moenupa's Blog</div>
            </v-container>
          </v-parallax>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="mCol in masonary()"
        :key="mCol"
      >
        <v-expand-transition v-for="article of articles" :key="article.slug">
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
import NuxtSSRScreenSize from "nuxt-ssr-screen-size";
export default {
  head() {
    return {
      title: "Blog",
      meta: [
        ...this.$utils.meta.get({
          keywords: "home,post,blog",
          title: "Blog",
          description: "Home of Moenupa's Blog",
          image: "",
          url:
            `${process.env.BASE_URL || "http://localhost:3000"}${this.$route
              .path || ""}` || ""
        })
      ]
    };
  },
  data() {
    return {
      filtering: false,
      filters: [],
      chunks: [],
      snackbar: false,
      snackbarpin: false,
      loading: true
    };
  },
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  methods: {
    filter(slug, col) {
      return this.$themer.masonary.filter(
        slug,
        col,
        this.articles,
        this.masonary()
      );
    },
    onLoad() {
      setTimeout(() => {
        this.filtering = true;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 0);
      setTimeout(() => (this.filtering = false), 400);
    },
    onScroll() {
      if (!this.snackbarpin) this.snackbar = !this.loading;
    },
    masonary() {
      return this.$themer.masonary.cols(this.$vssWidth);
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll", this.onScroll);
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  async asyncData({ app }) {
    const res = await app.$storyapi.get("cdn/stories", {
      starts_with: "articles/",
      resolve_relations: ["article.authors", "article.tags", "article.categories"]
    });
    return { articles: res.data.stories };
  },
  layout: "blog"
};
</script>
