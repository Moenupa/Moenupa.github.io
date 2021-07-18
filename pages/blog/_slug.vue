<template>
  <v-app>
    <v-navigation-drawer
      expand-on-hover
      fixed
      app
      permanent
    >
      <v-list-item
        link
        router
        to="/blog"
        exact
      >
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Blog Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="my-2" />
      <v-list nav dense>
        <v-list-item
          v-for="heading in article.toc"
          :key="heading.id"
          link
          router
          :to="'#' + heading.id"
          exact
        >
          <v-list-item-icon>
            <v-icon
              :color="$themer.color.hierarchical(2 * heading.depth - 3)"
              v-if="heading.depth <= 6 && heading.depth >= 2"> 
              {{ 'mdi-format-header-' + heading.depth }}
            </v-icon>
            <v-icon v-else>mdi-format-header-pound</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ heading.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <v-row class="my-8">
          <v-col cols="12">
            <v-card :loading="!expand" class="">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>
              <v-img-lottie
                :img="{ src: article.img, slug: article.slug, type: 0, height: 300 }"
              >
              </v-img-lottie>
              <v-card-title class="text-h3 px-sm-4 px-md-8 px-lg-16">{{ article.title }}</v-card-title>
              <v-card-subtitle class="text-h6 px-sm-4 px-md-8 px-lg-16">
                {{ article.description }}
              </v-card-subtitle>
              <v-card-actions class="px-sm-4 px-md-8 px-lg-16">
                <v-row>
                  <v-col cols="4">
                    <v-btn 
                      v-for="(author, id) in article.authors"
                      :key="id"
                      :to="authors[author] ? `/blog/author/${authors[author].slug}` : `/blog`"
                      :color="$themer.color.seeded(author)"
                      text
                      nuxt
                      small
                    >
                      <v-icon left>mdi-account-circle</v-icon>
                      {{ author }}
                    </v-btn>
                  </v-col>
                  <v-col cols="8">
                    <v-btn 
                      v-for="(tag, id) in article.tags"
                      :key="id"
                      :to="tags[tag].slug ? `/blog/tag/${tags[tag].slug}` : `/blog`"
                      :color="tags[tag].slug ? $themer.color.seeded(tags[tag].slug) : 'red'"
                      class="float-right"
                      text
                      nuxt
                      small
                    >
                      <v-icon left>mdi-tag-text</v-icon>
                      {{ tags[tag].name }}
                    </v-btn>
                  </v-col>
                </v-row>
                
              </v-card-actions>
              <v-card-text class="px-sm-4 px-md-8 px-lg-16">
                <v-chip-group v-model="selection" column>
                  <v-chip
                    v-for="
                      chip of [
                        { icon: 'mdi-text-box-outline', text: wordCount(article.body) + ' words' },
                        { icon: 'mdi-timer-sand', text: estimate(article.body) + ' mins' },
                        { icon: 'mdi-creation', text: 'Created: ' + $utils.date.format(article.createdAt) },
                        { icon: 'mdi-update', text: 'Updated: ' + $utils.date.format(article.updatedAt) },
                      ]"
                    :key="chip.id"
                  >
                    <v-icon left>{{chip.icon}}</v-icon>
                    {{chip.text}}
                  </v-chip>
                </v-chip-group>
              </v-card-text>
              <v-divider class="my-4" />
              <!-- <v-btn block @click="expand = !expand">{{ expand ? 'close' : 'open'}}</v-btn> -->
              <v-expand-transition>
                <nuxt-content class="py-4 px-sm-4 px-md-8 px-lg-16" id="post" :document="article" v-show="expand" />
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-footer-blog :mod="{ inset: true }"></v-footer-blog>
      <FunctionBar />
    </v-main>
  </v-app>
</template>
<script>
import Prism from '~/plugins/prism'
export default {
  head() {
    const title = `${this.article.title}`;
    const titleTemplate = `Post - %s`
    const keywords = `${this.article.tags.join(', ')}, moenupa, blog, post`
    const description = `${this.article.description}`
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
      expand: false,
      selection: []
    }
  },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
    const authorsList = await $content('authors')
      .sortBy('createdAt', 'asc')
      .only(['name', 'bio', 'img', 'slug'])
      .where({ name: { $containsAny: article.authors } })
      .fetch()
    const authors = Object.assign({}, ...authorsList.map((s) => ({ [s.name]: s })))
    return {
      article,
      tags,
      authors
    }
  },
  mounted() {
    setTimeout(() => {this.expand = true;}, 1000)
    Prism.highlightAll()
  },
  methods: {
    estimate(root) {
      return Math.ceil(this.wordCount(root) / 275);
    },
    wordCount(root) {
      const words = (e) => (e.type == 'text') ? (e.value.match(/[\w\d\’\'-]+/g) || []).length: 0;
      return (!root.children) ? words(root) : words(root) + root.children.reduce((s, c) => {return s + this.wordCount(c)}, 0);
    }
  },
  layout: 'raw'
}
</script>


<style>
</style>