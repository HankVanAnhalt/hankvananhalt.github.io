<script setup lang="ts">
import { ref, watch } from 'vue'
import type { TabsItem } from '@nuxt/ui'

const items = ref<TabsItem[]>([
  {
    value: 'programming',
    label: 'Programming',
    icon: 'i-lucide-code',
    projects: [
      {
        name: 'Spectral Games',
        description: "A web multiplayer game as a proof-of-concept for my Master's thesis, which investigates spectrogram perception through gamified studies. Your mission: Destroy the repetition sign and escape the notation system by solving the missing notes!",
        cover: '/icons/SpectralGames.png',
        to: 'https://www.youtube.com/watch?v=gIygX2AgAlg',
        tools: [
          { name: 'Vue.js', icon: 'i-simple-icons:vuedotjs' },
          { name: 'Nuxt', icon: 'i-simple-icons:nuxtdotjs' },
          { name: 'TypeScript', icon: 'i-simple-icons:typescript' }
        ]
      },
      {
        name: 'Sonic Structures',
        description: 'In a 1:1 Mixed Reality model of the Kulturpalast Dresden (Germany), visitors could move freely through the building wearing the Meta Quest 2 VR Headset. Your mission: create and pump up objects using sound, e.g. claps, shouts, or even farts. Then, push the objects around until all recorded sounds are played back. Publicly exhibited.',
        cover: '/icons/SonicStructures.png',
        to: 'https://www.youtube.com/watch?v=OtWQO-z2nW4',
        tools: [
          { name: 'Unity', icon: 'i-simple-icons:unity' },
          { name: 'Oculus', icon: 'i-simple-icons:oculus' },
          { name: 'CSharp', icon: 'i-simple-icons:csharp' }
        ]
      },
      {
        name: 'Enlarged Resonators',
        description: "An investigation into HRTF-based 3D audio using SteamAudio, utilizing a custom guitar model built in Blender. The core concept: How do shape and material impact sound? This application could serve as a prototyping tool for guitar manufacturing, allowing for the testing of experimental shapes without wasting wood.",
        cover: '/icons/EnlargedResonators.png',
        to: 'https://www.youtube.com/watch?v=bH3eeVFouNU',
        tools: [
          { name: 'Unity', icon: 'i-simple-icons:unity' },
          { name: 'Steam', icon: 'i-simple-icons:steam' },
          { name: 'FMOD', icon: 'i-simple-icons:fmod' },
          { name: 'Blender', icon: 'i-simple-icons:blender' },
          { name: 'C', icon: 'i-simple-icons:csharp' }
        ]
      },
      {
        name: 'Earconizer',
        description: "This web application serves as a sample structure manager, synthesizing interdependent, layered earcons. The aim of this project is to investigate how earcons can convey semantic qualities similar to their visual counterparts—icons. A specific use case could be the sonification and scoring of interactive audio contexts, such as video games. Click or tap here to read our full paper.",
        cover: '/icons/Earcons.webp',
        to: 'https://dl.gi.de/items/5a918cec-c9e8-4c64-a719-ab774bdd1441',
        tools: [
          { name: 'Vue.js', icon: 'i-simple-icons:vuedotjs' },
          { name: 'Nuxt', icon: 'i-simple-icons:nuxtdotjs' },
          { name: 'TypeScript', icon: 'i-simple-icons:typescript' }
        ]
      },
      {
        name: 'Emotion Glyphs',
        description: "Finding the right sample is one of the most time-consuming tasks in music production, as traditional text-based filtering fails to capture a sound's true vibe. This web application introduces an alternative search method. By allowing producers to define audio characteristics via visual cues rather than words, it eliminates the subjective ambiguity inherent in the emotional evaluation of sound.",
        cover: '/icons/EmotionGlyphs.png',
        to: 'https://www.youtube.com/watch?v=asr4DOTdstE',
        tools: [
          { name: 'Vue.js', icon: 'i-simple-icons:vuedotjs' },
          { name: 'Nuxt', icon: 'i-simple-icons:nuxtdotjs' },
          { name: 'TypeScript', icon: 'i-simple-icons:typescript' }
        ]
      },
      {
        name: 'Basic EQ',
        description: "Driven by my love for audio processing and creation, I started exploring the JUCE framework. As I’m still building my skills, this Equalizer is my 'Hello World' into audio processing.",
        cover: '/icons/BasicEQ.png',
        to: 'https://github.com/HankVanAnhalt/BasicEQ-Juce',
        tools: [
          { name: 'JUCE', icon: 'i-simple-icons:juce' },
          { name: 'CPlusPlus', icon: 'i-simple-icons:cplusplus' }
        ]
      },
      {
        name: 'Adaptive DMX',
        description: 'This full-stack application serves as an adaptive DMX light controller that reacts dynamically to audio input. It is especially useful for live performances and visual entertainment, eliminating the need for a dedicated event technician.',
        cover: '/icons/DMX.png',
        to: 'https://www.youtube.com/watch?v=JrV1AWGM4yY',
        tools: [
          { name: 'Vue.js', icon: 'i-simple-icons:vuedotjs' },
          { name: 'Nuxt', icon: 'i-simple-icons:nuxtdotjs' },
          { name: 'TypeScript', icon: 'i-simple-icons:typescript' },
          { name: 'CPlusPlus', icon: 'i-simple-icons:cplusplus' }
        ]
      }
    ]
  },
  {
    value: 'media-design',
    label: 'Media Design',
    icon: 'i-lucide-palette',
    projects: [
      {
        name: 'Vinyl Face',
        description: "My logo. Inspired by the sound of vinyl and the 90s house scene, it can't wait to get behind the decks. 🪩 Wanna hear some DJ sets? Just click or tap on it.",
        cover: '/icons/Logo2.png',
        to: 'https://www.mixcloud.com/haenk-music/',
        tools: [
          { name: 'Affinity', icon: 'i-streamline-logos:affinity-designer-logo-solid' },
          { name: 'DJ', icon: 'i-simple-icons:pioneerdj' },
          { name: 'MixCloud', icon: 'i-simple-icons:mixcloud' }
        ]
      },
      {
        name: 'Educational Cartoon',
        description: 'While working at Deutsche Telekom, I independently created an animated movie focused on social engineering and digital safety. Managing the entire creation process alone—from asset creation, rigging and comicsiting to color grading, audio production and sound scoring—this project was a fantastic opportunity to unite my various passions within media production.',
        cover: '/icons/Movie.png',
        to: 'https://www.youtube.com/watch?v=quQXdv5782M&list=PLJv-LhpWtkEd1CBosmlYyWit2J6yNluOJ&index=1',
        tools: [
          { name: 'AfterEffects', icon: 'i-mage:after-effects' },
          { name: 'Illustrator', icon: 'i-mage:illustrator' },
          { name: 'Premiere', icon: 'i-mage:premier-pro' },
          { name: 'Ableton', icon: 'i-cbi:abletonlive' },
          { name: 'Ableton', icon: 'i-simple-icons:protools' }
        ]
      },
      {
        name: 'Escape Room',
        description: "Vector art designed for room identification at a Deutsche Telekom team event.",
        cover: '/icons/EscapeRoom.png',
        tools: [
          { name: 'Illustrator', icon: 'i-mage:illustrator' }
        ]
      },
      {
        name: 'Guitar Model',
        description: "A Blender model of an acoustic guitar, featuring a fully detailed interior of the resonance chamber. This served as the foundation for my 3D audio experiments found in the Programming Tab of this section.",
        cover: '/icons/GuitarBlender.png',
        tools: [
          { name: 'Blender', icon: 'i-simple-icons:blender' }
        ]
      },
      {
        name: 'Exploded View',
        description: "A conceptual illustration from my Data Visualization course. The exploded view shows the assembly instructions used to build a physical data visualization model out of 3D printed pieces.",
        cover: '/icons/ExplodedView.png',
        tools: [
          { name: 'Illustrator', icon: 'i-mage:illustrator' }
        ]
      }
    ]
  }
])

const selectedTab = ref('programming')

const isExpanded = ref(false)

watch(selectedTab, () => {
  isExpanded.value = false
})
</script>

<template>
  <UPageSection>
    <template #title>
      <h1
        class="text-[10vw] landscape:text-[8vw] font-black leading-none tracking-tight flex items-center gap-10 text-nowrap">
        <span>Spice Rack</span>
        <UIcon name="i-noto:hot-pepper" />
      </h1>
    </template>

    <UTabs v-model="selectedTab" :items="items" class="w-full">
      <template #content="{ item }">
        <div class="w-full flex flex-col gap-8 mt-6">
          <UPageList class="w-full gap-5">

            <UPageCard 
              v-for="project in (isExpanded ? item.projects : item.projects.slice(0, 3))" 
              :key="project.name" 
              :description="project.description"
              :to="project.to" 
              target="_blank" 
              orientation="horizontal" 
              reverse
            >
              <template #title>
                <div class="flex flex-col gap-2">
                  <div v-if="project.tools && project.tools.length" class="flex gap-2 items-center">
                    <UIcon v-for="tool in project.tools" :key="tool.name" :name="tool.icon" class="text-primary" />
                  </div>
                  <span class="text-xl font-bold text-gray-900 dark:text-white">
                    {{ project.name }}
                  </span>
                </div>
              </template>
              <NuxtImg :src="project.cover" alt="Project Cover" class="w-full rounded-lg" />
            </UPageCard>

          </UPageList>

          <!-- Der Expand-Button taucht nur auf, wenn der Tab tatsächlich mehr als 3 Projekte hat -->
          <div v-if="item.projects.length > 3" class="flex justify-center mt-4">
            <UButton
              :label="isExpanded ? 'Show Less' : 'Show More'"
              :icon="isExpanded ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
              variant="soft"
              @click="() => {isExpanded = !isExpanded}"
            />
          </div>
        </div>
      </template>
    </UTabs>

    <!-- Ersetze das versteckte NuxtImg am Ende deines Spice Racks durch natives HTML -->
    <div style="display: none;" aria-hidden="true">
      <template v-for="tab in items" :key="tab.value">
        <img v-for="project in tab.projects" :key="project.name" :src="project.cover" />
      </template>
    </div>
  </UPageSection>
</template>