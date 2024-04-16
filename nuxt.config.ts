// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  typescript: {
    typeCheck: true,
  },
  modules: ["@nuxt/ui", "nuxt-snackbar"],
  snackbar: {
    bottom: true,
    right: true,
    duration: 2000,
  },
  colorMode: {
    preference: "light",
  },
});
