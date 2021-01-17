export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "anna-homepage",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://tailwindcss.com/docs/guides/nuxtjs
    // https://tailwindcss.nuxtjs.org/setup
    "@nuxtjs/tailwindcss"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxt/content" // https://www.netlifycms.org/docs/nuxt/
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  generate: {
    /*routes: function() {
      const fs = require("fs");
      const path = require("path");
      return fs.readdirSync("./content/blog").map(file => {
        return {
          route: `/blog/${path.parse(file).name}`, // Return the slug
          payload: require(`./content/blog/${file}`)
        };
      });
    }*/
  },

  tailwindcss: {
    // Options https://tailwindcss.nuxtjs.org/options/
    cssPath: "~/assets/styles/tailwind.scss",
    configPath: "~/tailwind.config.js"
  }
};
