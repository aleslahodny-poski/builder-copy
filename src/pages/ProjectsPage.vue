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
    
    <!-- Hero bez fotky — klient chce web postavený na typografii, ne na obrázcích. -->
    <section class="mx-auto max-w-[1600px] px-5 pt-6 md:px-8 lg:px-10">
      <div class="relative w-full overflow-hidden rounded-shell border border-line bg-ink p-8 md:p-12 lg:p-16">
        <nav
          v-reveal="50"
          class="flex items-center gap-2 text-label font-bold uppercase tracking-[0.2em] text-paper/60"
        >
          <RouterLink to="/" class="transition-colors hover:text-paper">Domů</RouterLink>
          <span class="text-paper/45">/</span>
          <span class="text-paper">Projekty</span>
        </nav>

        <div class="relative z-10 mt-10 max-w-4xl">
          <p v-reveal class="text-label uppercase tracking-[0.32em] text-paper/60 font-bold">
            Přehled ročníku
          </p>
          <h1 v-reveal="100" class="mt-4 text-display font-medium tracking-[-0.04em] text-paper">
            Nominované projekty
          </h1>
          <p v-reveal="200" class="mt-5 max-w-2xl text-body leading-relaxed text-paper/70 md:text-lead">
            Prozkoumejte špičkovou architekturu lokálních i nadnárodních developerů a podpořte svého
            favorita.
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

      <section v-reveal class="relative mt-20 overflow-hidden rounded-shell border border-ink bg-ink text-paper">
        <div class="relative z-10 grid gap-8 px-6 py-12 md:grid-cols-[1fr_auto] md:items-center md:px-12 lg:px-16 lg:py-16">
          <div>
            <p class="text-label uppercase tracking-[0.32em] text-paper/60 font-bold">Pro developery</p>
            <h2 class="mt-4 max-w-2xl text-h1 font-medium tracking-[-0.04em]">
              Jste připraveni představit svou práci veřejnosti?
            </h2>
            <p class="mt-4 max-w-xl text-body leading-relaxed text-paper/70">
              Připravte příběh svého projektu, obrazové materiály a detaily přihlášky pro další ročník soutěže.
            </p>
          </div>

          <RouterLink
            to="/pro-developery"
            class="w-fit rounded-full border border-accent bg-accent px-8 py-4 text-label font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-transparent hover:text-accent shadow-sm"
          >
            Přihlaste svůj projekt
          </RouterLink>
        </div>
      </section>

    </section>
  </div>
</template>
