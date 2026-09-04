<script setup lang="ts">
import { ref, watch } from 'vue'
import type { TabsItem } from '@nuxt/ui'
import { portfolioTabs } from '~/data/portfolio'

const items = ref<TabsItem[]>(portfolioTabs)

const selectedTab = ref('programming')

const isExpanded = ref(false)

watch(selectedTab, () => {
  isExpanded.value = false
})
</script>

<template>
  <UPageSection>
    <template #title>
      <h2
        class="text-[10vw] landscape:text-[8vw] font-black leading-none tracking-tight flex items-center gap-[2.5vw] text-nowrap">
        <span>Spice Rack</span>
        <UIcon name="i-noto:hot-pepper" />
      </h2>
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
              <NuxtImg
                :src="project.cover"
                :alt="project.name"
                loading="lazy"
                class="w-full aspect-video object-cover rounded-lg"
              />
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
  </UPageSection>
</template>