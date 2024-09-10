/// <reference types="vitest" />
/// <reference types="vitest/globals" />

import { isCI } from 'std-env'
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    poolOptions: {
      threads: {
        singleThread: !isCI,
      },
    },
    watchExclude: [
      'dist',
      'playground',
      'test/**/*',
      '**/.nuxt/**/*',
      '**/.output/**/*',
    ],
  },
})
