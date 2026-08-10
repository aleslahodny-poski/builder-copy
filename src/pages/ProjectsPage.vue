<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'

import ProjectCard from '@/components/ProjectCard.vue'
import RegionMap from '@/components/RegionMap.vue'
import { projects } from '@/data/site'

const selectedRegion = ref('Všechny regiony')
const selectedDistrict = ref('')

const filteredProjects = computed(() => {
  return projects.filter((project) => {
    const matchesRegion = selectedRegion.value === 'Všechny regiony' || project.region === selectedRegion.value
    const matchesDistrict = !selectedDistrict.value || project.district === selectedDistrict.value

    return matchesRegion && matchesDistrict
  })
})

const currentFilterLabel = computed(() => {
  if (selectedDistrict.value) {
    return selectedDistrict.value
  }

  return selectedRegion.value
})
</script>

<template>
  <div class="min-h-screen bg-paper pb-24 -mt-24 pt-24 md:-mt-28 md:pt-28">
    
    <!-- FRAME HERO MATCHING HOMEPAGE/DETAIL - MUCH LESS HEIGHT, MOUNTAINOUS BACKGROUND VISIBLE -->
    <section class="mx-auto max-w-[1600px] px-5 pt-6 md:px-8 lg:px-10">
      <div class="relative w-full min-h-[200px] md:min-h-[260px] lg:min-h-[300px] border border-line bg-muted overflow-hidden rounded-[2rem] flex flex-col justify-center items-center text-center p-8 md:p-10">
         
         <nav v-reveal="50" class="absolute top-5 left-6 md:top-8 md:left-10 z-20 flex items-center gap-2 text-label font-bold uppercase tracking-[0.2em] text-paper/60 drop-shadow-md">
           <RouterLink to="/" class="hover:text-paper transition-colors">Domů</RouterLink>
           <span class="text-paper/40">/</span>
           <span class="text-paper">Projekty</span>
         </nav>

         <div class="absolute inset-0 bg-ink">
            <!-- Used mountainous effect from Unsplash with distinct landscape features -->
            <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80" 
                 class="absolute inset-0 h-full w-full object-cover opacity-[0.8] grayscale mix-blend-luminosity brightness-125" />
            <div class="absolute inset-0 bg-ink/70 pointer-events-none mix-blend-multiply"></div>
            <!-- More subtle gradient so background is clearly visible -->
            <div class="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent pointer-events-none"></div>
         </div>
         <div class="relative z-10 max-w-4xl pt-8 md:pt-4">
           <p v-reveal class="text-label uppercase tracking-[0.32em] text-paper/60 font-bold drop-shadow-md">Přehled ročníku</p>
           <h1 v-reveal="100" class="mt-3 text-display font-bold tracking-[-0.04em] text-paper drop-shadow-lg">
             Nominované projekty
           </h1>
           <p v-reveal="200" class="mt-4 max-w-2xl mx-auto text-small md:text-body leading-relaxed text-paper/80 drop-shadow-md">
             Prozkoumejte špičkovou architekturu lokálních i nadnárodních developerů a podpořte svého favorita.
           </p>
         </div>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="mx-auto max-w-[1600px] px-5 py-12 md:px-8 lg:px-10">

      <RegionMap
        :selected-region="selectedRegion"
        :selected-district="selectedDistrict"
        @update:region="selectedRegion = $event"
        @update:district="selectedDistrict = $event"
        v-reveal
      />

      <div v-if="selectedRegion !== 'Všechny regiony' || selectedDistrict !== ''" class="mt-16 flex flex-col gap-4 border-y border-line py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-label uppercase tracking-[0.3em] font-bold text-ink/45">Aktuální filtr</p>
          <p class="mt-2 text-h2 font-bold tracking-[-0.03em] text-ink border-l-4 border-ink pl-4 ml-[-1rem]">{{ currentFilterLabel }}</p>
        </div>
        <p class="text-label uppercase font-bold tracking-[0.2em] text-ink/70 rounded-full border border-line px-5 py-3 bg-canvas whitespace-nowrap">Zobrazeno {{ filteredProjects.length }} projektů</p>
      </div>

      <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ProjectCard v-for="(project, i) in filteredProjects" :key="project.slug" :project="project" v-reveal="i * 100" />
      </div>

      <div
        v-if="filteredProjects.length === 0"
        class="mt-10 rounded-card border border-dashed border-ink/20 bg-canvas px-8 py-16 text-center text-lead leading-relaxed text-ink/70"
      >
        <svg class="h-12 w-12 mx-auto text-ink/45 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span class="font-bold">Tomuto filtru zatím nejsou přiřazeny žádné projekty.</span> <br/>Zkuste jiný region nebo zrušte filtr pražských částí.
      </div>

      <section v-reveal class="mt-20 overflow-hidden rounded-[2.5rem] border border-ink bg-ink text-paper relative group">
        <div class="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1541888087798-245ed8b6e686')] bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105 mix-blend-overlay pointer-events-none"></div>
        <div class="relative z-10 grid gap-8 px-6 py-12 md:grid-cols-[1fr_auto] md:items-center md:px-12 lg:px-16 lg:py-16">
          <div>
            <p class="text-label uppercase tracking-[0.32em] text-paper/50 font-bold drop-shadow-sm">Pro developery</p>
            <h2 class="mt-4 max-w-2xl text-h1 font-bold tracking-[-0.04em] drop-shadow-md">
              Jste připraveni představit svou práci veřejnosti?
            </h2>
            <p class="mt-4 max-w-xl text-body leading-relaxed text-paper/80">
              Připravte příběh svého projektu, obrazové materiály a detaily přihlášky pro další ročník soutěže.
            </p>
          </div>

          <RouterLink
            to="/pro-developery"
            class="rounded-full border border-paper bg-paper px-8 py-4 text-label font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-transparent hover:text-paper shadow-sm w-fit"
          >
            Přihlaste svůj projekt
          </RouterLink>
        </div>
      </section>

    </section>
  </div>
</template>
