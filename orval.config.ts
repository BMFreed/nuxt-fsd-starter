import { config } from 'dotenv'
import { defineConfig } from 'orval'

//Сначала пробуем загрузить локальный конфиг. Если его нет - грузим общий
config({ path: ['.env.local', '.env'] })

/** Конфигурация Orval */
export default defineConfig({
  pravda: {
    output: {
      mode: 'tags-split',
      target: 'api/endpoints',
      schemas: 'api/model',
      client: 'vue-query',
      override: {
        mutator: {
          path: './src/shared/api/apiClient.ts',
          name: 'apiClient',
        },
        query: {
          options: {
            staleTime: 3_600_000,
          },
        },
      },
    },
    input: {
      target: process.env['OPENAPI_SCHEMA_URL'] as string,
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write --ignore-path .prettierignore',
    },
  },
})
