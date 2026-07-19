<template>
    <SvgoIcon ref="logoRef" name="logo-ring" class="logo-svg" strategy="skipsvgo" @click="pumpLogo" />
</template>

<script setup>

const logoRef = ref(null)
let RING = null
let rafId = null

let angle = 0
let velocity = 0.2

const updateRotation = () => {
    if (!RING) return

    velocity = velocity > 0.2 ? velocity * 0.96 : 0.2

    angle = (angle + velocity) % 360
    RING.style.transform = `rotate(${angle}deg)`

    rafId = requestAnimationFrame(updateRotation)
}

const pumpLogo = () => {
    velocity = Math.min(velocity + 5, 15)
}

onMounted(() => {
    RING = logoRef.value?.$el?.querySelector('#RING_ROTATE')
    rafId = requestAnimationFrame(updateRotation)
})

onBeforeUnmount(() => {
    cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.logo-svg :deep(#RING_ROTATE) {
    transform-origin: center;
    will-change: transform;
}
</style>