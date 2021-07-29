export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "Moenupa - %s",
    title: process.env.npm_package_name || "",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/onemore-flat.ico",
        alt: "/favicon.ico"
      }
    ],
    script: [
      {
        src:
          "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/main",
    "~/node_modules/highlight.js/styles/tomorrow-night.css",
    "~/node_modules/katex/dist/katex.min.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/themer" },
    { src: "~/plugins/utils" },
    { src: "~/plugins/markdown-it" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    ["nuxt-clipboard", { autoSetContainer: true }],
    [
      "storyblok-nuxt",
      { accessToken: process.env.STORYBLOK_KEY, cacheProvider: "memory" }
    ]
    // "@nuxtjs/sitemap"
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"]
  },

  // Sitemap module configuration: https://go.nuxtjs.dev/config-sitemap
  sitemap: {
    hostname: process.env.BASE_URL,
    routes() {
      return async () => {
        const { $content } = require("@nuxt/content");
        const files = await $content({ deep: true })
          .only(["path"])
          .fetch();

        return files.map(file => (file.path === "/index" ? "/" : file.path));
      };
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        enforce: "pre",
        test: /\.md$/,
        loader: "raw-loader",
        exclude: /(node_modules)/
      });
    }
  },

  loading: '~/components/Loading.vue'
};
