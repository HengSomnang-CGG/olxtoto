// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === "marquee",
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ["~/assets/css/main.css", "~/assets/css/styleeditor.css"],
  modules: ["@nuxt/icon", "@nuxt/ui"],
});
