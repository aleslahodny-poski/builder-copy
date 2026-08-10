const fs = require('fs');

// 1. Rewrite RegionMap.vue
const mapTxt = fs.readFileSync('src/assets/map.txt', 'utf8');

// Parse paths from map.txt
const pathRegex = /<path class="([^"]+)" d="([^"]+)"/g;
let match;
const regionsMap = [];

const nameMap = {
  'Moravskoslezsky-kraj': 'Moravskoslezský',
  'Zlinsky-kraj': 'Zlínský',
  'Olomoucky-kraj': 'Olomoucký',
  'Jihomoravsky-kraj': 'Jihomoravský',
  'Pardubicky-kraj': 'Pardubický',
  'Kralovehradecky-kraj': 'Královéhradecký',
  'Kraj-Vysocina': 'Vysočina',
  'Jihocesky-kraj': 'Jihočeský',
  'Hlavni-mesto-Praha': 'Praha',
  'Stredocesky-kraj': 'Středočeský',
  'Plzensky-kraj': 'Plzeňský',
  'Karlovarsky-kraj': 'Karlovarský',
  'Ustecky-kraj': 'Ústecký',
  'Liberecky-kraj': 'Liberecký'
};

while ((match = pathRegex.exec(mapTxt)) !== null) {
  const id = match[1];
  const d = match[2];
  if (nameMap[id]) {
    regionsMap.push({ id, name: nameMap[id], d });
  }
}

// Generate RegionMap.vue
const regionMapVue = `<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  selectedRegion: string
  selectedDistrict: string
}>()

const emit = defineEmits<{
  (event: 'update:region', value: string): void
  (event: 'update:district', value: string): void
}>()

const hoveredRegion = ref('')

const regions = ${JSON.stringify(regionsMap, null, 2)};

const pragueDistricts = Array.from({ length: 10 }, (_, i) => \`Praha \${i + 1}\`)

const regionClass = (name: string) => {
  if (props.selectedRegion === name) return 'fill-ink text-paper stroke-ink'
  if (hoveredRegion.value === name) return 'fill-ink/30 stroke-ink/50'
  return 'fill-transparent stroke-ink/20 hover:fill-ink/20'
}

const selectRegion = (name: string) => {
  if (props.selectedRegion === name) {
    emit('update:region', 'Všechny regiony')
    emit('update:district', '')
  } else {
    emit('update:region', name)
    emit('update:district', '')
  }
}

const selectDistrict = (name: string) => {
  emit('update:district', props.selectedDistrict === name ? '' : name)
}
</script>

<template>
  <div class="grid gap-12 lg:grid-cols-[1fr_400px]">
    
    <!-- SVG MAP - LEFT -->
    <div class="rounded-3xl border border-line bg-canvas p-6 md:p-10 flex flex-col justify-center items-center">
      <div class="w-full relative">
         <!-- Tooltip for Prague -->
         <div 
           v-if="hoveredRegion === 'Praha' && selectedRegion !== 'Praha'" 
           class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ink text-paper text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full pointer-events-none z-10 shadow-xl opacity-90"
         >
           Pro detaily vyberte napravo
         </div>
         
         <svg viewBox="0 0 953 549" class="w-full h-auto drop-shadow-sm">
           <g v-for="region in regions" :key="region.id">
             <!-- Tooltip on hover using SVG title for accessibility, though custom tooltip is better -->
             <path
               :d="region.d"
               :class="regionClass(region.name)"
               class="cursor-pointer stroke-[2] transition-all duration-300 transform origin-center"
               @click="selectRegion(region.name)"
               @mouseenter="hoveredRegion = region.name"
               @mouseleave="hoveredRegion = ''"
             >
                <title>{{ region.name }}</title>
             </path>
           </g>
         </svg>
      </div>
    </div>

    <!-- BUTTONS - RIGHT -->
    <div class="rounded-3xl border border-line bg-paper p-6 md:p-10 flex flex-col h-full">
      <div class="flex items-start justify-between gap-4 border-b border-line pb-6 mb-6">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] text-ink/45 font-bold">Česká republika</p>
          <p class="mt-2 text-sm leading-6 text-ink/65 font-bold">Vyberte region ze seznamu</p>
        </div>
        <button
          type="button"
          class="rounded-full border border-ink/20 px-5 py-2 text-xs uppercase tracking-[0.18em] font-bold text-ink transition hover:bg-ink hover:text-paper shadow-sm"
          @click="selectRegion('Všechny regiony')"
        >
          Reset
        </button>
      </div>

      <div class="flex flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar">
        <template v-for="region in regions" :key="region.id">
          
          <button
            type="button"
            class="flex w-full items-center justify-between rounded-full border px-6 py-4 text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300"
            :class="[
              selectedRegion === region.name ? 'border-ink bg-ink text-paper shadow-md' : 
              hoveredRegion === region.name ? 'border-ink bg-ink/5 text-ink' : 'border-line bg-transparent text-ink/70 hover:border-ink hover:text-ink'
            ]"
            @click="selectRegion(region.name)"
            @mouseenter="hoveredRegion = region.name"
            @mouseleave="hoveredRegion = ''"
          >
            <span>{{ region.name }}</span>
            <svg v-if="selectedRegion === region.name" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            <svg v-else class="h-4 w-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
          </button>

          <!-- Prague Sub-Districts Dropdown -->
          <div v-if="region.name === 'Praha' && selectedRegion === 'Praha'" class="ml-6 mr-2 mt-2 mb-4 p-5 rounded-3xl bg-canvas border border-line">
             <p class="text-xs uppercase tracking-[0.3em] text-ink/45 font-bold mb-4">Pražské části</p>
             <div class="grid grid-cols-2 gap-3">
               <button
                 v-for="district in pragueDistricts"
                 :key="district"
                 type="button"
                 class="rounded-full border px-4 py-3 text-[10px] uppercase tracking-[0.16em] font-bold transition-all duration-300"
                 :class="selectedDistrict === district ? 'border-ink bg-ink text-paper shadow-sm' : 'border-line bg-paper text-ink/70 hover:border-ink hover:text-ink'"
                 @click="selectDistrict(district)"
               >
                 {{ district }}
               </button>
             </div>
          </div>
        </template>
      </div>
    </div>

  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: var(--color-line);
  border-radius: 4px;
}
</style>
`;
fs.writeFileSync('src/components/RegionMap.vue', regionMapVue);


// 2. Rewrite ProjectsPage.vue
const projectsPageVue = `<script setup lang="ts">
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
    
    <!-- FRAME HERO MATCHING HOMEPAGE/DETAIL -->
    <section class="mx-auto max-w-[1600px] px-5 pt-6 md:px-8 lg:px-10">
      <div class="relative w-full aspect-[16/9] lg:aspect-[21/9] min-h-[400px] border border-line bg-muted overflow-hidden rounded-shell flex flex-col justify-center items-center text-center p-10">
         <div class="absolute inset-0 bg-ink">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80" class="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-overlay" />
            <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent pointer-events-none"></div>
         </div>
         <div class="relative z-10 max-w-4xl pt-20">
           <p class="text-xs uppercase tracking-[0.32em] text-paper/45 font-bold">Přehled ročníku</p>
           <h1 class="mt-5 text-5xl font-bold tracking-[-0.05em] text-paper md:text-7xl">
             Nominované projekty
           </h1>
           <p class="mt-6 max-w-2xl mx-auto text-base leading-8 text-paper/70 font-bold tracking-wide">
             Prozkoumejte špičkovou architekturu lokálních i nadnárodních developerů a podpořte svého favorita.
           </p>
         </div>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="mx-auto max-w-[1600px] px-5 py-16 md:px-8 lg:px-10">
      <div class="max-w-4xl mb-12">
        <h2 class="text-3xl font-bold tracking-[-0.04em] text-ink md:text-4xl">
          Filtrujte užší výběr pomocí mapy.
        </h2>
        <p class="mt-4 max-w-2xl text-base leading-relaxed text-ink/70 font-bold">
          Klikněte na region přímo v mapě ČR, nebo využijte rychlé navigace v seznamu na pravé straně. Získáte tak okamžitý přístup k detailům developerských objevů.
        </p>
      </div>

      <RegionMap
        :selected-region="selectedRegion"
        :selected-district="selectedDistrict"
        @update:region="selectedRegion = $event"
        @update:district="selectedDistrict = $event"
      />

      <div class="mt-16 flex flex-col gap-4 border-y border-line py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-xs uppercase tracking-[0.3em] font-bold text-ink/45">Aktuální filtr</p>
          <p class="mt-2 text-3xl font-bold tracking-[-0.03em] text-ink border-l-4 border-ink pl-4 ml-[-1rem]">{{ currentFilterLabel }}</p>
        </div>
        <p class="text-xs uppercase font-bold tracking-[0.2em] text-ink/55 rounded-full border border-line px-5 py-3 bg-canvas">Zobrazeno {{ filteredProjects.length }} projektů</p>
      </div>

      <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ProjectCard v-for="project in filteredProjects" :key="project.slug" :project="project" />
      </div>

      <div
        v-if="filteredProjects.length === 0"
        class="mt-10 rounded-card border border-dashed border-ink/20 bg-canvas px-8 py-16 text-center text-lg font-bold leading-relaxed text-ink/65"
      >
        <svg class="h-12 w-12 mx-auto text-ink/20 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        Tomuto filtru zatím nejsou přiřazeny žádné projekty. <br/>Zkuste jiný region nebo zrušte filtr pražských částí.
      </div>

      <section class="mt-20 overflow-hidden rounded-[2.5rem] border border-ink bg-ink text-paper relative group">
        <div class="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1541888087798-245ed8b6e686')] bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105 mix-blend-overlay pointer-events-none"></div>
        <div class="relative z-10 grid gap-8 px-6 py-12 md:grid-cols-[1fr_auto] md:items-center md:px-12 lg:px-16 lg:py-16">
          <div>
            <p class="text-xs uppercase tracking-[0.32em] text-paper/50 font-bold drop-shadow-sm">Pro developery</p>
            <h2 class="mt-4 max-w-2xl text-4xl font-bold tracking-[-0.04em] drop-shadow-md">
              Jste připraveni představit svou práci veřejnosti?
            </h2>
            <p class="mt-5 max-w-xl text-base leading-relaxed text-paper/70 font-bold">
              Připravte příběh svého projektu, obrazové materiály a detaily přihlášky pro další ročník soutěže.
            </p>
          </div>

          <RouterLink
            to="/pro-developery"
            class="rounded-full border border-paper bg-paper px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-transparent hover:text-paper shadow-sm w-fit"
          >
            Přihlaste svůj projekt
          </RouterLink>
        </div>
      </section>
    </section>
  </div>
</template>
`;
fs.writeFileSync('src/pages/ProjectsPage.vue', projectsPageVue);

console.log('Successfully updated RegionMap.vue and ProjectsPage.vue');
