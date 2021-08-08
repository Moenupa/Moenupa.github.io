<template>
  <v-app>
    <v-main class="d-flex justify-center align-center">
      <v-container style="min-height: calc( 100vh - 60px )" >
        <v-post
          class="py-4 px-sm-4 px-md-8 px-lg-16"
          :text="test"
        >
        </v-post>
      </v-container>
      <FunctionBar :settings="{ blog_dashboard: true }"/>
      <v-footer-blog :mod="{}"></v-footer-blog>
    </v-main>
    <v-navigation-drawer expand-on-hover fixed app permanent>
      <v-list-item link router to="/blog" exact>
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
          v-for="heading in toc"
          :key="heading.id"
          link
          router
          :to="'#' + heading.slug"
          exact
        >
          <v-list-item-icon>
            <v-icon
              :color="$themer.color.indexed(2 * heading.depth - 3)"
              v-if="heading.depth <= 6 && heading.depth >= 1"
            >
              {{ "mdi-format-header-" + heading.depth }}
            </v-icon>
            <v-icon v-else>mdi-format-header-pound</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ heading.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import md from '/content/articles/format-testing.md'
export default {
  data() {
    return {
      test: md,
      toc: this.$md.toc
    }
  },
  layouts: "raw"
}
</script>