<script setup lang="ts">
defineProps<{
  reverse?: boolean
}>()
</script>

<template>
  <UMarquee 
    :reverse="reverse" 
    :ui="{
        root: '[--duration:60s]'
    }"
  >
    <UIcon name="i-simple-icons:github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons:gitlab" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons:jira" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons:confluence" class="size-10 shrink-0" />
    <UIcon name="i-cbi:abletonlive" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons:juce" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons:protools" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons:cplusplus" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons:dotnet" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons:vuedotjs" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons:typescript" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons:webgl" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons:tailwindcss" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons:python" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons:nuxt" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons:swift" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons:android" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons:ios" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons:unity" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons:fmod" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons:blender" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons:oculus" class="size-10 shrink-0" />
    <UIcon name="i-mage:adobe" class="size-10 shrink-0" />
    <UIcon name="i-streamline-logos:affinity-designer-logo-solid" class="size-10 shrink-0" />
    <UIcon name="i-game-icons:guitar-bass-head" class="size-10 shrink-0" />
  </UMarquee>
</template>