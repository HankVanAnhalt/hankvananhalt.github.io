// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    'nuxt-svgo-loader',
    '@nuxtjs/google-fonts',
    '@nuxt/image'
  ],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      Inter: [200, 400, 600, 700, 900],
    },
    download: true,
    inject: true
  },
  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: './app/assets/icons'
    }],
    clientBundle: {
      scan: true
    }
  },
  svgoLoader: {
    defaultImport: 'component' 
  },
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },
  ssr: false
})