<template>
  <div class="flex flex-col gap-20">
    <ScreenLanding />
    <IconsMarquee />
    <ScreenWhatsNew />
    <IconsMarquee :reverse="true"/>
    <ScreenPortfolio />
    <IconsMarquee />
    <AboutMe />
  </div>
  
</template>