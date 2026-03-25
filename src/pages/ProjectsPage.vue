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
  <section class="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-10 lg:py-24">
    <div class="max-w-4xl">
      <p class="text-xs uppercase tracking-[0.32em] text-ink/45">Seznam projektů</p>
      <h1 class="mt-5 text-5xl font-medium tracking-[-0.05em] text-ink md:text-7xl">
        Filtrujte užší výběr podle regionů a prozkoumejte každý projekt na stejné úrovni.
      </h1>
      <p class="mt-6 max-w-2xl text-base leading-8 text-ink/68 md:text-lg">
        Začněte mapou České republiky. Pokud vyberete Prahu, zobrazí se detailní pohled na městské části pro jemnější filtrování.
      </p>
    </div>

    <div class="mt-12">
      <RegionMap
        :selected-region="selectedRegion"
        :selected-district="selectedDistrict"
        @update:region="selectedRegion = $event"
        @update:district="selectedDistrict = $event"
      />
    </div>

    <div class="mt-12 flex flex-col gap-4 border-y border-line py-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p class="text-xs uppercase tracking-[0.3em] text-ink/45">Aktuální filtr</p>
        <p class="mt-2 text-2xl font-medium tracking-[-0.03em] text-ink">{{ currentFilterLabel }}</p>
      </div>
      <p class="text-sm uppercase tracking-[0.2em] text-ink/55">Zobrazeno {{ filteredProjects.length }} projektů</p>
    </div>

    <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <ProjectCard v-for="project in filteredProjects" :key="project.slug" :project="project" />
    </div>

    <div
      v-if="filteredProjects.length === 0"
      class="mt-10 rounded-card border border-dashed border-line bg-paper px-6 py-10 text-base leading-7 text-ink/65"
    >
      Tomuto filtru zatím nejsou přiřazeny žádné projekty. Zkuste jiný region nebo zrušte filtr pražských částí.
    </div>

    <section class="mt-20 overflow-hidden rounded-shell border border-ink bg-ink text-paper">
      <div class="grid gap-8 px-6 py-10 md:grid-cols-[1fr_auto] md:items-center md:px-10 lg:px-12 lg:py-12">
        <div>
          <p class="text-xs uppercase tracking-[0.32em] text-paper/50">Pro developery</p>
          <h2 class="mt-4 max-w-2xl text-3xl font-medium tracking-[-0.04em] md:text-4xl">
            Jste připraveni představit svou práci před veřejnou porotou?
          </h2>
          <p class="mt-4 max-w-2xl text-base leading-7 text-paper/70">
            Připravte příběh svého projektu, obrazové materiály a detaily přihlášky pro další ročník soutěže.
          </p>
        </div>

        <RouterLink
          to="/pro-developery"
          class="rounded-soft border border-paper bg-paper px-7 py-3 text-sm tracking-[0.16em] text-ink transition hover:bg-transparent hover:text-paper"
        >
          Přihlaste svůj projekt
        </RouterLink>
      </div>
    </section>
  </section>
</template>
