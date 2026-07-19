<script setup lang="ts">
import type { PageFeatureProps } from '@nuxt/ui'

const features: PageFeatureProps[] = [
  {
    title: 'Education',
    description: 'B.Sc. & M.Sc. Media Computer Science, Advanced Diploma Classical Guitar',
    icon: 'i-icon-park-solid:degree-hat'
  },
  {
    title: 'Current Employment',
    description: 'Developer & Sound Designer at JYMMiN GmbH & Logosonic GmbH',
    icon: 'i-material-symbols:work',
    to: 'https://jymmin.com/',
    target: '_blank'
  },
  {
    title: 'Previous Experience', 
    description: 'Audio Producer at Funkhaus Halle GmbH & Co. KG, Support Manager at MAGIX Software GmbH, Media Designer at Deutsche Telekom',
    icon: 'i-material-symbols:work-outline'
  },
  {
    title: "What's your take on AI?", 
    description: 'No vibe-coded slop, no AI art. Pure craftsmanship and full control.', 
    icon: 'i-hugeicons:artificial-intelligence-04'
  },
  {
    title: 'What else?', 
    description: 'Fueled by music, guitars, skateboards, games, and pizza since Y2K! 🎸 🛹 🍕', 
    icon: 'i-material-symbols:person-heart'
  },
  {
    title: 'Wanna collab?', 
    description: 'Contact me via imprint or use the social platforms linked below.', 
    icon: 'i-material-symbols:mail'
  }
]
</script>

<template>
  <UPageSection
    title="About Me"
    description="My artistic foundation started with an advanced degree in classical guitar — a discipline that fueled my curiosity for the mechanics and effects of sound. This passion quickly evolved from strings to silicon, leading me deep into digital signal processing and synthesizing, professional editing software, game engines and immersive media. Today, I seamlessly fuse these passions to break down silos, bridging the gap between business, architecture, developers and artists. Let's shape the future of entertainment and creative software! 🚀"
    :features="features"
    :ui="
    {
      title: 'text-[10vw] landscape:text-[8vw] font-black leading-none tracking-tight text-left',
      description: 'text-left'
    }"
  />
</template>