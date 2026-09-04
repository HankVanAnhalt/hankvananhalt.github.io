// https://nuxt.com/docs/api/configuration/nuxt-config
import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import { portfolioTabs } from './app/data/portfolio'

const portfolioCovers = portfolioTabs.flatMap(tab => tab.projects.map(project => project.cover))

const portfolioImageRoutes = portfolioCovers.map(cover => `/_ipx/q_82${cover}`)

// Reads each cover's real width/height so the UI can reserve layout space
// (aspect-ratio) without anyone hand-maintaining pixel dimensions in the data file.
const portfolioAspectRatios = Object.fromEntries(
  await Promise.all(
    portfolioCovers.map(async (cover) => {
      const { width, height } = await sharp(fileURLToPath(new URL(`./public${cover}`, import.meta.url))).metadata()
      return [cover, `${width} / ${height}`]
    })
  )
)

await writeFile(
  fileURLToPath(new URL('./app/data/portfolio-aspect-ratios.generated.json', import.meta.url)),
  JSON.stringify(portfolioAspectRatios, null, 2)
)

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
  ssr: true, // required for Nuxt Image to do its optimization at build
  image: {
    format: ['webp'],
    quality: 82
  },
  nitro: {
    prerender: {
      // Portfolio covers only render for the active tab at build time (UTabs),
      // so IPX won't generate variants for the rest without being told explicitly.
      routes: portfolioImageRoutes
    }
  },
  app: {
    head: {
      title: 'HÆNK.',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/png', href: '/icons/Logo_Filled.png' }
      ],
      meta: [
        {
          name: 'google-site-verification',
          content: 'XMM0NQIpeaKxWbUDIwedsJXvhI7ndEcslEBhco_aVn0'
        },
        {
          name: 'description',
          content: "HÆNK is a Berlin-based developer and sound designer working across web apps, games, and immersive media — from spatial audio and DSP to full-stack development."
        },
        { property: 'og:title', content: 'HÆNK.' },
        {
          property: 'og:description',
          content: "HÆNK is a Berlin-based developer and sound designer working across web apps, games, and immersive media — from spatial audio and DSP to full-stack development."
        },
        { property: 'og:image', content: '/icons/Logo_Filled.png' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' }
      ]
    }
  }
})