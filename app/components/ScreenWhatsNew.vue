<script setup lang="ts">

const cards = [
  {
    title: "Contributed to Open Source",
    description: "Dived deep into PB2350 microcontroller audio processing and fixed streaming issues specific to macOS and TinyUSB, enabling bidirectional realtime audio over Bluetooth!",
    icon: "i-simple-icons:raspberrypi",
    img: "/icons/Pico2W.png",
    to: "https://github.com/HankVanAnhalt/DS5Dongle-MacOS-Audio-Optimization"
  },
  {
    title: "Shipped my first App",
    description: "At JYMMiN, I develop serious games in health tech. As the sole developer, I have the pleasure of managing the whole distribution process, including publishing our public app SQUATS.",
    icon: "i-simple-icons:unity",
    img: "/icons/squats.png",
    to: "https://play.google.com/store/apps/details?id=com.JYMMiNGmbH.JYMMiN_SQUATS&hl=gsw"
  }
]
</script>

<template>
  <UPageSection>
    <template #title>
      <h1 class="text-[10vw] landscape:text-[8vw] font-black leading-none tracking-tight flex items-center gap-10 text-nowrap">
        <UIcon name="i-noto:cooking" class="text-[1.6em] shrink-0 select-none" />
        <span class="block"> What's<br>cookin' </span>
        <span class="text-[2.1em]">?</span>
      </h1>
    </template>

    <div class="w-full pt-8">
      <div class="hidden landscape:grid grid-cols-2 gap-6 h-full">
        <UPageCard 
          v-for="card in cards" 
          :key="card.title" 
          :title="card.title" 
          :description="card.description"
          :icon="card.icon" 
          :to="card.to" 
          target="_blank" 
          variant="soft" 
          orientation="horizontal"
          :ui="{ wrapper: 'h-full' }"
        >
          <NuxtImg :src="card.img" class="rounded-lg max-h-40 md:max-h-full object-contain" />
        </UPageCard>
      </div>

      <div class="hidden portrait:block w-full max-w-sm mx-auto">
        <UCarousel v-slot="{ item }" loop dots :autoplay="{ delay: 8000 }" :items="cards">
          <UPageCard 
            :title="item.title" 
            :description="item.description" 
            :icon="item.icon" 
            :to="item.to" 
            target="_blank"
            variant="soft" 
            class="mx-1"
          >
            <NuxtImg :src="item.img" class="rounded-lg aspect-1 mx-auto" />
          </UPageCard>
        </UCarousel>
      </div>
    </div>
  </UPageSection>
</template>