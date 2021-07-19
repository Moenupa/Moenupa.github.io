<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="12" id="profile">
        <v-card class="pa-4 mt-4" justify="center" align="center">
          <div class="my-2">
            <v-avatar size="160">
              <v-img id="selfie" src="/img/main.png" alt=""/>
              <!-- author link: https://www.pixiv.net/users/23223750 -->
            </v-avatar>
          </div>
          <div class="my-4">
            <div class="text-lg-h2 text-md-h3 text-h4">Moenupa WANG</div>
            <div class="text-lg-h5 text-md-h6 text-body-1">
              Current Undergraduate Student at Hong Kong PolyU
            </div>
          </div>
          <div v-for="clist in contacts" :key="clist.id">
            <v-tooltip bottom v-for="contact in clist" :key="contact.id">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  small
                  plain
                  fab
                  :href="contact.link ? contact.link : undefined"
                  v-bind="attrs"
                  v-on="on"
                  :color="
                    contact.darkaccent && $vuetify.theme.dark
                      ? contact.darkaccent
                      : contact.accent
                  "
                >
                  <v-icon>{{
                    contact.icon ? contact.icon : "mdi-account"
                  }}</v-icon>
                </v-btn>
              </template>
              <span>{{ contact.name }}</span>
            </v-tooltip>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-col cols="12" sm="10" md="6" xl="5">
        <v-card class="pa-4 mb-4" id="introduction">
          <div class="text-lg-h4 text-h5 text-center">Introduction</div>
          <v-card-text>
            <p class="text--primary">👋 Hello, there!</p>
            <p class="text--primary">
              I am WANG Meng, a year-3 Computing student from Hong Kong PolyU. I
              started a minor in mathematics in Oct, 2020. 
            </p>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <div>
              Contact me via any platform in the above information section.
            </div>
            <div>
              Click
              <v-btn x-small disabled outlined
                ><v-icon small>mdi-function-variant</v-icon></v-btn
              >
              for functions in the bottom right corner to explore more.
            </div>
          </v-card-text>
        </v-card>
        <v-card class="pa-4 mb-4" id="interests">
          <div class="text-lg-h4 text-h5 text-center">Interests</div>
          <v-simple-table class="table text-left m-0">
            <tbody>
              <IconRow
                v-for="(interest, ii) in interests"
                :info="interest"
                :key="ii"
                :len="interests.length"
              />
            </tbody>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="6" xl="4">
        <v-expansion-panels v-model="panel">
          <v-expansion-panel v-for="(gist, gist_i) in gists" :key="gist_i">
            <v-expansion-panel-header v-if="Object.keys(gist.files)[0]">{{
              gist.files[Object.keys(gist.files)[0]].filename
            }}</v-expansion-panel-header>
            <v-expansion-panel-content v-if="Object.keys(gist.files)[0]">
              <pre
                v-html="gist.files[Object.keys(gist.files)[0]].content"
              ></pre>
              <v-divider class="mt-2 mb-1"></v-divider>
              <v-btn
                text
                x-small
                plain
                :href="gist.html_url"
                :color="'purple' + ($vuetify.theme.dark ? ' lighten-2' : '')"
                ><v-icon left>mdi-github</v-icon>github</v-btn
              >
              <v-btn
                text
                x-small
                plain
                @click="
                  snackbar_text = 'git clone ' + gist.git_pull_url;
                  copy(snackbar_text);
                  snackbar = true;
                "
                color="green"
              >
                <v-icon left>mdi-git</v-icon>git
              </v-btn>
              <v-btn text disabled x-small class="float-right"
                ><v-icon left>mdi-update</v-icon>updated:
                {{ new Date(gist.updated_at).toString().slice(4, 21) }}</v-btn
              >
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="6"
        xl="3"
        v-for="(course, type, ci) in courses"
        :key="ci"
      >
        <v-card class="pa-4" justify="center" align="center">
          <div class="text-lg-h4 text-h5 text-center text-capitalize">
            {{ type }} Courses
          </div>
          <v-simple-table class="m-0">
            <tbody>
              <IconRow v-for="item in course" :info="item" :key="item.id" />
            </tbody>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" timeout="2000" :vertical="true">
      Copied to Clipboard:
      <pre class="d-inline-block text-truncate">{{ snackbar_text }}</pre>
      <template v-slot:action="{ attrs }">
        <v-btn
          color="red lighten-2"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          <v-icon left>mdi-close</v-icon>
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<style>
pre {
  white-space: pre-wrap;
  overflow: auto !important;
}
</style>

<script>
export default {
  head() {
    return {
      title: "Homepage",
      meta: [
        ...this.$utils.meta.get({
          keywords: "home,homepage",
          title: "Homepage",
          description: "Moenupa's Homepage",
          image: "",
          url: `${process.env.BASE_URL || 'http://localhost:3000'}${this.$route.path || ""}` || "",
        }),
      ]
    }
  },
  data() {
    return {
      panel: 0,
      snackbar: false,
      snackbar_text: "snackbar_init",
      interests: [],
      gistlist: [
        "58f69668a4db5aa5da0b74b901230ffc",
        "5848c95b83cb449f79e14b16615039fc",
        "30493d0c7ead93d676b4d6c8a29dbb8a",
        "dd5e2c295036bcfa7251a8dfe5facabc",
        "aab911df7d12ffabb0ff9e8cb5545597"
      ],
      gists: [],
      courses: {},
      contacts: []
    };
  },
  async fetch() {
    const gh_api = "https://api.github.com/gists/";
    for (var i = 0; i < this.gistlist.length; i++) {
      this.gists[i] = await fetch(gh_api + this.gistlist[i]).then(res =>
        res.json()
      );
    }
    const homepage_gist =
      "https://gist.githubusercontent.com/Moenupa/3c84c5c4d627330cd6a16df84a051877/raw";

    this.courses = await fetch(homepage_gist + "/courses.json").then(res =>
      res.json()
    );
    this.interests = await fetch(homepage_gist + "/interests.json").then(res =>
      res.json()
    );
    this.contacts = await fetch(homepage_gist + "/contacts.json").then(res =>
      res.json()
    );
  },
  methods: {
    async copy(text) {
      try {
        await this.$copyText(text);
      } catch (e) {
        console.error(e);
      }
    }
  },
  mounted() {},
  layout: 'fill'
};
</script>
