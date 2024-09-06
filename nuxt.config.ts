// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt'],
  typescript: { shim: true },
  dir: {
    pages: 'src/pages',
    layouts: 'src/app/ui/layouts',
    assets: 'src/shared/assets',
    plugins: 'src/shared/lib/nuxt/plugins',
  },
  ssr: false,
  compatibilityDate: '2024-09-06',
})
