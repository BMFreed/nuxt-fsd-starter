// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura'
import { ru } from 'primelocale/ru.json'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module'],
  typescript: { shim: true },
  vite: {
    vue: {
      script: {
        propsDestructure: true,
      },
    },
  },
  primevue: {
    options: {
      locale: ru,
      theme: {
        preset: Aura,
        options: {
          cssLayer: {
            name: 'primevue',
          },
        },
      },
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
