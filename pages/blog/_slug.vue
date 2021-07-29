<template>
  <v-container>
    <v-row class="my-8" justify="space-around">
      <v-col cols="12" sm="10" xl="8">
        <v-card :loading="!expand" class="">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-img-lottie
            :img="{
              src: article.content.img,
              slug: article.content.slug,
              type: 0,
              height: 300
            }"
          >
          </v-img-lottie>
          <v-card-title class="text-sm-h4 text-md-h3 before px-sm-8 px-lg-16 mt-2">{{
            article.content.title
          }}</v-card-title>
          <v-card-subtitle class="text-sm-h6 px-4 px-sm-8 px-md-12 px-lg-16 pt-1">
            {{ article.content.description }}<br />
          </v-card-subtitle>
          <v-card-actions class="px-4 px-sm-8 px-md-12 px-lg-16">
            <v-btn-info
              v-for="category in categories"
              :key="category.id"
              :info="category.content"
              :icon="`mdi-archive`"
            ></v-btn-info>
          </v-card-actions>
          <v-card-actions class="px-4 px-sm-8 px-md-12 px-lg-16">
            <v-row>
              <v-col cols="4">
                <v-btn-info
                  v-for="author in authors"
                  :key="author.id"
                  :info="author.content"
                  :icon="`mdi-account`"
                ></v-btn-info>
              </v-col>
              <v-col cols="8">
                <v-btn-info
                  v-for="tag in tags"
                  :key="tag.id"
                  :info="tag.content"
                  class="float-right"
                ></v-btn-info>
              </v-col>
            </v-row>
          </v-card-actions>
          <v-card-text class="px-4 px-sm-8 px-md-12 px-lg-16">
            <v-chip-group v-model="selection" column>
              <v-chip
                small
                v-for="chip of [
                  {
                    icon: 'mdi-text-box-outline',
                    text: $utils.post.words(article.content.content) + ' words'
                  },
                  {
                    icon: 'mdi-timer-sand',
                    text: $utils.post.estimate(article.content.content) + ' mins'
                  },
                  {
                    icon: 'mdi-creation',
                    text:
                      'Published: ' + $utils.date.format(meta.createdAt)
                  },
                  {
                    icon: 'mdi-update',
                    text:
                      'Updated: ' + $utils.date.format(meta.updatedAt)
                  }
                ]"
                :key="chip.id"
              >
                <v-icon left>{{ chip.icon }}</v-icon>
                {{ chip.text }}
              </v-chip>
            </v-chip-group>
          </v-card-text>
          <v-divider class="my-4" />
          <!-- <v-btn block @click="expand = !expand">{{ expand ? 'close' : 'open'}}</v-btn> -->
          <v-expand-transition>
            <v-post
              class="py-4 pb-sm-8 px-4 px-sm-8 px-md-12 px-lg-16"
              :text="article.content.content"
              v-show="expand"
            ></v-post>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  head() {
    return {
      title: this.meta.title,
      titleTemplate: `Post - %s`,
      meta: [
        ...this.$utils.meta.get({
          keywords: this.meta.tags ? this.meta.tags.toString() : "",
          title: `Post: ${this.meta.title}`,
          description: this.meta.description,
          image: this.meta.img,
          url:
            `${process.env.BASE_URL || "http://localhost:3000"}${this.$route
              .path || ""}` || "",
          type: "article",
          author: this.meta.author ? this.meta.author.toString() : ""
        }),
        {
          hid: "article:published_time",
          property: "article:published_time",
          content: this.meta.createdAt
        },
        {
          hid: "article:modified_time",
          property: "article:modified_time",
          content: this.meta.updatedAt
        },
        {
          hid: "article:tag",
          property: "article:tag",
          content: this.meta.tags ? this.meta.tags.toString() : ""
        },
        {
          hid: "twitter:label1",
          name: "twitter:label1",
          content: "Written by"
        },
        {
          hid: "twitter:data1",
          name: "twitter:data1",
          content: "Moenupa WANG"
        },
        {
          hid: "twitter:label2",
          name: "twitter:label2",
          content: "Filed under"
        },
        {
          name: "twitter:data2",
          content: this.meta.tags ? this.meta.tags.toString() : ""
        }
      ]
    };
  },
  data() {
    return {
      expand: false,
      selection: []
    };
  },
  async asyncData({ app, route }) {
    const slug = route.params.slug
    const res = await app.$storyapi.get('cdn/stories', {
      starts_with: 'articles/',
      by_slugs: '*/' + slug,
      resolve_relations: ["article.authors", "article.tags", "article.categories"]
    })
 
    const article = res.data.stories[0]
    const meta = {
      title: article.content.title,
      description: article.content.description,
      img: article.content.img,
      createdAt: article.first_published_at,
      updatedAt: article.published_at,
    }
    return { article, meta, authors: article.content.authors, tags: article.content.tags, categories: article.content.categories }
  },
  mounted() {
    setTimeout(() => {
      this.expand = true;
    }, 1000);
  },
  layout: "blog"
};
</script>

<style></style>
