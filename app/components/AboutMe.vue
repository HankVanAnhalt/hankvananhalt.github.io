<script setup lang="ts">
import type { container } from '#build/ui';
import type { ButtonProps, PageFeatureProps } from '@nuxt/ui'

const features: PageFeatureProps[] = [
  {
    title: 'Location', 
    description: 'Berlin, Germany', 
    icon: 'i-material-symbols:location-on-rounded'
  },
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
  }
]

const links = ref<ButtonProps[]>([
  
  {
    to: '#',
    icon: 'i-lucide-chevron-up',
    size: 'xl',
    color: 'neutral',
    variant: 'soft',
    class: 'invisible pointer-events-none'
  },
  {
    label: 'CONTACT',
    to: 'mailto:ankunft.matches-7v@icloud.com',
    icon: 'i-material-symbols:mail',
    size: 'xl'
  },
  {
    to: '#',
    icon: 'i-lucide-chevron-up',
    size: 'xl',
    color: 'neutral',
    variant: 'soft'
  }
])
</script>

<template>
  <UPageSection
    description="My artistic foundation started with an advanced degree in classical guitar — a discipline that fueled my curiosity for the mechanics and effects of sound. This passion quickly evolved from strings to silicon, leading me deep into digital signal processing and synthesizing, professional editing software, game engines and immersive media. Today, I seamlessly fuse these passions to break down silos, bridging the gap between business, architecture, developers and artists. Let's shape the future of entertainment and creative software! 🚀"
    :features="features"
    :links="links"
    :ui="
    {
      description: 'text-left',
      links: 'flex justify-between'
    }"
  >
  
  <template #title>
      <h1 class="text-[10vw] landscape:text-[8vw] font-black leading-none tracking-tight flex items-center gap-10 text-nowrap">
        About Me
      </h1>
    </template>

  </UPageSection>
</template>