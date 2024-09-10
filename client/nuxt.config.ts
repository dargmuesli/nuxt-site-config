import DevtoolsUIKit from '@nuxt/devtools-ui-kit'
import { resolve } from 'pathe'

export default defineNuxtConfig({
  ssr: false,
  modules: [
    DevtoolsUIKit,
  ],
  devtools: {
    enabled: false,
  },
  nitro: {
    output: {
      publicDir: resolve(__dirname, '../packages/module/dist/client'),
    },
  },
  app: {
    baseURL: '/__nuxt-site-config',
  },
})
