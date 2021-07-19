<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-subtitle>
            <v-avatar>
              <v-img-lottie
                :img="{ src: tag.img, slug: tag.slug, type: 2, height: -1 }"
              >
              </v-img-lottie>
            </v-avatar>
            <v-btn small text :color="$themer.color.seeded(tag.slug)">
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
      title: this.tag.name,
      titleTemplate: "Blog - Tag: %s",
      meta: [
        ...this.$utils.meta.get({
          keywords: `${this.tag.name},blog,post`,
          title: `Blog Tag: ${this.tag.name}`,
          description: `posts about ${this.tag.name}`,
          image: this.$themer.gallery.get({ src: this.tag.img, slug: this.tag.name }),
          url:
            `${process.env.BASE_URL || "http://localhost:3000"}${this.$route
              .path || ""}` || ""
        })
      ]
    };
  },
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  async asyncData({ $content, params }) {
    const tags = await $content("tags")
      .without("body")
      .where({ slug: { $contains: params.tag } })
      .limit(1)
      .fetch();
    const tag = tags[0] || {};
    const articles = await $content("articles", params.slug)
      .without("body")
      .sortBy("createdAt", "asc")
      .where({ tags: { $contains: tag.name } })
      .fetch();
    return {
      articles,
      tag
    };
  },
  methods: {
    filter(slug, col) {
      return this.$themer.masonary.filter(
        slug,
        col,
        this.articles,
        this.masonary()
      );
    },
    masonary() {
      return this.$themer.masonary.cols(this.$vssWidth);
    }
  },
  layout: "blog"
};
</script>
