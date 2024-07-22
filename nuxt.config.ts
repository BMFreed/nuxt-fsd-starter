// https://nuxt.com/docs/api/configuration/nuxt-config

import { ru } from 'primelocale/ru.json'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-primevue'],
  typescript: { shim: true },
  vite: {
    vue: {
      script: {
        propsDestructure: true,
      },
    },
  },
  primevue: {
    // Автоматический импорт всех компонентов раздувает бандл
    components: { include: [] },
    options: {
      locale: ru,
    },
  },
  dir: {
    pages: 'src/pages',
    layouts: 'src/app/ui/layouts',
    assets: 'src/shared/assets',
    plugins: 'src/shared/lib/nuxt/plugins',
  },
  ssr: false,
})
