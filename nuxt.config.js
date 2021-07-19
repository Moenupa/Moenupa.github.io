import getRoutes from './utils/route';
import { createSEOMeta } from './utils/seo';

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
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      ...createSEOMeta({
        title: process.env.npm_package_name || "",
      })
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
  css: ["@/assets/css/main"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/themer" }, { src: "~/plugins/utils" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    ["nuxt-clipboard", { autoSetContainer: true }],
    "@nuxtjs/sitemap"
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: false,
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-material-dark.css"
      },
      remarkPlugins: ["remark-math", "remark-gfm", "remark-hint"],
      rehypePlugins: ["rehype-mathjax"],
      tocDepth: 6
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"]
  },

  // Sitemap module configuration: https://go.nuxtjs.dev/config-sitemap
  sitemap: {
    hostname: process.env.BASE_URL,
    routes() {
      return getRoutes();
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
