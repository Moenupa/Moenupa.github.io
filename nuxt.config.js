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
    "~/node_modules/highlight.js/styles/atom-one-dark.css",
    "~/node_modules/katex/dist/katex.min.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // TODO: integrate @nuxtjs/i18n and query
    // { src: "~/plugins/locale" },
    { src: "~/plugins/markdown-it" },
    { src: "~/plugins/themer" },
    { src: "~/plugins/utils" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    // "@nuxtjs/i18n",
    ["nuxt-clipboard", { autoSetContainer: true }],
    [
      "storyblok-nuxt",
      { accessToken: process.env.STORYBLOK_KEY, cacheProvider: "memory" }
    ]
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"]
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

  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English"
      },
      {
        code: "zh-cn",
        iso: "zh-CN",
        name: "简体中文"
      }
    ],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en"
    }
  },

  loading: "~/components/Loading.vue"
};
