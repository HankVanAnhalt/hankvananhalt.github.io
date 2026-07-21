<template>
  <div class="flex flex-col min-h-dvh">

    <main class="grow container mx-auto px-4">
      <slot />
    </main>

    <USeparator type="solid" class="h-px" />

    <UFooter>
      <template #left>
        <span class="text-sm text-gray-500 cursor-pointer">
          © {{ new Date().getFullYear() }} Maximilian Hanke
        </span>
      </template>

      <template #right>
        <UModal>
          <span class="text-sm text-gray-500 cursor-pointer hover:underline hover:text-gray-700 dark:hover:text-gray-300">
            Imprint
          </span>
          
          <template #content>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Imprint
              </h3>
              
              <div class="space-y-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white">
                    Information pursuant to § 5 DDG / Angaben gemäß § 5 DDG:
                  </p>
                  <p class="mt-1">
                    Maximilian Hanke<br>
                    Goethestr. 23<br>
                    06862 Dessau-Roßlau
                  </p>
                  <p class="mt-2">
                    <strong>Contact / Kontakt:</strong><br>
                    <a href="mailto:ankunft.matches-7v@icloud.com" class="text-primary hover:underline">E-Mail</a>
                  </p>
                </div>

                <div>
                  <p class="font-semibold text-gray-900 dark:text-white">
                    Person responsible for content according to § 18 Abs. 2 MStV / Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
                  </p>
                  <p class="mt-1">
                    Maximilian Hanke<br>
                    Goethestr. 23<br>
                    06862 Dessau-Roßlau
                  </p>
                </div>

                <div class="border-t border-gray-200 dark:border-gray-800 pt-3 text-xs text-gray-500 space-y-3">
                  <div>
                    <strong class="block mb-0.5 text-gray-700 dark:text-gray-300">Copyright / Urheberrecht:</strong>
                    <p>The content and works created on this website are subject to German copyright law. / Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.</p>
                  </div>
                  <div>
                    <strong class="block mb-0.5 text-gray-700 dark:text-gray-300">Disclaimer / Haftungsausschluss:</strong>
                    <p>As the operator of this website, I am responsible for my own content according to general laws. No liability is assumed for external links. / Als Betreiber dieser Webseite bin ich für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich. Für externe Links wird keine Haftung übernommen.</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
          
        </UModal>
        
      </template>

      <template #default>
        <UButton icon="i-simple-icons-github" color="neutral" variant="ghost" to="https://github.com/HankVanAnhalt"
          target="_blank" aria-label="GitHub" />

        <UButton icon="i-simple-icons:linkedin" color="neutral" variant="ghost"
          to="https://www.linkedin.com/in/maximilian-hanke/" target="_blank" aria-label="LinkedIn" />
        <UButton icon="i-simple-icons:discord" color="neutral" variant="ghost" to="https://discord.com/users/unclehankz"
          target="_blank" aria-label="Discord" />
        <UButton icon="i-simple-icons:soundcloud" color="neutral" variant="ghost"
          to="https://soundcloud.com/haenk-audio" target="_blank" aria-label="Soundcloud" />
        <UButton icon="i-simple-icons:mixcloud" color="neutral" variant="ghost"
          to="https://www.mixcloud.com/haenk-music/" target="_blank" aria-label="Mixcloud" />
      </template>
    </UFooter>
  </div>
</template>