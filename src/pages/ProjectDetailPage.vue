<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { projects } from '@/data/site'
import ProjectCard from '@/components/ProjectCard.vue'

const route = useRoute()
const email = ref('')
const voteSubmitted = ref(false)

const isLightboxOpen = ref(false)
const activePhotoIndex = ref(0)

const project = computed(() => projects.find((entry) => entry.slug === route.params.slug))

// Watch project changes to reset state and scroll to top when clicking a related project
watch(() => route.params.slug, () => {
  voteSubmitted.value = false
  email.value = ''
  window.scrollTo({ top: 0, behavior: 'instant' })
})

const relatedProjects = computed(() => {
  if (!project.value) return []
  const others = projects.filter(p => p.slug !== project.value!.slug)
  
  let matches = others.filter(p => {
    if (project.value!.region === 'Praha') return p.district === project.value!.district
    return p.region === project.value!.region
  })
  
  if (matches.length < 3) {
    const nonMatches = others.filter(p => !matches.includes(p))
    matches = [...matches, ...nonMatches]
  }
  
  return matches.slice(0, 3)
})

const submitVote = () => {
  if (!email.value) return
  voteSubmitted.value = true
}

const scrollToGallery = () => {
  document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
}

const openLightbox = (index: number) => {
  activePhotoIndex.value = index
  isLightboxOpen.value = true
  document.body.style.overflow = 'hidden' // Prevent underlying scroll
}

const closeLightbox = () => {
  isLightboxOpen.value = false
  document.body.style.overflow = ''
}

const nextPhoto = () => {
  if (!project.value || !project.value.gallery) return
  activePhotoIndex.value = (activePhotoIndex.value + 1) % project.value.gallery.length
}

const prevPhoto = () => {
  if (!project.value || !project.value.gallery) return
  activePhotoIndex.value = (activePhotoIndex.value - 1 + project.value.gallery.length) % project.value.gallery.length
}
</script>

<template>
  <div v-if="project" class="min-h-screen bg-paper -mt-24 pt-24 md:-mt-28 md:pt-28 pb-24">
    <!-- LIGHTBOX MODAL (Teleported to body) -->
    <Teleport to="body">
      <div v-if="isLightboxOpen" class="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-md transition-opacity">
        <button @click="closeLightbox" class="absolute top-6 right-6 z-50 p-4 text-paper/70 transition hover:text-paper hover:scale-110">
          <svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        
        <button @click.stop="prevPhoto" class="absolute left-6 md:left-10 z-50 rounded-full bg-paper/10 p-4 text-paper transition hover:bg-paper/20 hover:scale-110">
          <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        
        <button @click.stop="nextPhoto" class="absolute right-6 md:right-10 z-50 rounded-full bg-paper/10 p-4 text-paper transition hover:bg-paper/20 hover:scale-110">
          <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
        </button>

        <div class="relative max-h-[85vh] max-w-[85vw] mx-auto" @click.stop>
          <!-- Using img directly based on active index -->
          <img :src="project.gallery[activePhotoIndex]" class="max-h-[85vh] max-w-[85vw] mx-auto object-contain drop-shadow-2xl select-none" />
          <div class="absolute -bottom-16 left-1/2 -translate-x-1/2 text-sm tracking-[0.3em] uppercase font-bold text-paper/70">
            {{ activePhotoIndex + 1 }} / {{ project.gallery.length }}
          </div>
        </div>
      </div>
    </Teleport>

    <!-- HERO IMAGE - IN FRAME WITH ROUNDED CORNERS -->
    <section v-reveal class="mx-auto max-w-[1600px] px-5 pt-6 md:px-8 lg:px-10">
      <div class="relative w-full aspect-[16/9] lg:aspect-[21/9] min-h-[400px] border border-line bg-muted overflow-hidden rounded-shell">
        
        <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/60 to-transparent pointer-events-none z-10"></div>
        
        <nav class="absolute top-6 left-6 md:top-8 md:left-10 z-20 flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-paper/70 drop-shadow-md">
          <RouterLink to="/" class="hover:text-paper transition-colors">Domů</RouterLink>
          <span class="text-paper/40">/</span>
          <RouterLink to="/projekty" class="hover:text-paper transition-colors">Projekty</RouterLink>
          <span class="text-paper/40">/</span>
          <span class="text-paper truncate max-w-[120px] sm:max-w-[200px] md:max-w-xs">{{ project.name }}</span>
        </nav>

        <img :src="project.image" :alt="project.name" class="absolute inset-0 h-full w-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent pointer-events-none"></div>
        
        <div class="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-10">
          <button @click="scrollToGallery" class="inline-flex items-center gap-3 rounded-full border border-paper/40 bg-ink/20 px-6 py-3 md:px-8 md:py-4 text-xs font-bold uppercase tracking-[0.2em] text-paper shadow-sm transition-all duration-300 hover:bg-paper hover:text-ink hover:border-paper backdrop-blur-md">
            Zobrazit galerii
          </button>
        </div>
      </div>
    </section>

    <!-- ROW 1: HEADERS + DESCRIPTION + VOTE(ABOVE) -->
    <div class="mx-auto max-w-[1600px] px-5 py-12 md:px-8 lg:px-10 flex flex-col lg:flex-row gap-16 relative items-start">
      
      <div class="flex-1 w-full min-w-0 flex flex-col gap-10 lg:gap-16">
        <div v-reveal>
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-ink/45">Detail projektu</p>
          <h1 class="mt-5 max-w-3xl text-5xl font-bold tracking-[-0.05em] text-ink md:text-7xl lg:text-[5.5rem] leading-[0.9]">
            {{ project.name }}
          </h1>
          <div class="mt-10 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
            <span class="rounded-full border border-line px-5 py-2.5 bg-canvas">
              {{ project.region === 'Praha' && project.district ? project.district : project.region }}
            </span>
            <span class="rounded-full border border-line px-5 py-2.5 bg-canvas">{{ project.developer.name }}</span>
          </div>
        </div>

        <div v-reveal="100" class="prose prose-lg prose-headings:font-bold prose-headings:text-ink prose-a:text-ink text-ink/80 max-w-4xl" v-html="project.descriptionHtml || project.description"></div>
      </div>

      <!-- RIGHT COLUMN: VOTE BOX 1 -->
      <aside v-reveal="200" class="w-full lg:w-[420px] shrink-0 lg:sticky top-32 z-10">
        <div class="rounded-3xl border border-ink bg-ink p-8 md:p-10 text-paper shadow-2xl">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-paper/50">Hlasovat</p>
          <h2 class="mt-4 text-3xl font-bold tracking-[-0.04em]">Dejte svůj hlas tomuto projektu.</h2>
          <p class="mt-4 text-sm leading-relaxed text-paper/72">
            Níže zadejte svou e-mailovou adresu. Zašleme Vám potvrzovací odkaz k ověření Vašeho hlasu.
          </p>

          <form class="mt-8 space-y-4" @submit.prevent="submitVote">
            <label class="block text-xs font-bold uppercase tracking-[0.18em] text-paper/60" for="vote-email-1">
              E-mailová adresa
            </label>
            <input
              id="vote-email-1"
              v-model="email"
              type="email"
              placeholder="jmeno@email.cz"
              class="w-full rounded-full border border-paper/20 bg-paper/10 px-6 py-4 text-base font-bold text-paper outline-none transition placeholder:text-paper/35 focus:border-paper"
              required
            />
            <button
              type="submit"
              class="w-full rounded-full border border-paper bg-paper px-6 py-5 text-xs font-bold uppercase tracking-[0.2em] text-ink transition hover:bg-transparent hover:text-paper shadow-sm mt-4"
            >
              Hlasovat
            </button>
          </form>

          <p v-if="voteSubmitted" class="mt-5 rounded-soft border border-paper/20 bg-paper/10 px-5 py-4 text-sm font-bold leading-relaxed text-paper/78">
            Demo potvrzení: odkaz pro ověření hlasu odeslán na {{ email }}.
          </p>
        </div>
      </aside>

    </div>

    <!-- ROW 2: GALLERY FULL WIDTH -->
    <section id="gallery" class="w-full border-y border-line bg-canvas py-16 lg:py-28 my-10">
      <div v-reveal class="mx-auto max-w-[1600px] px-5 md:px-8 lg:px-10">
        <h2 class="text-3xl font-bold tracking-tight text-ink mb-10">Fotogalerie</h2>
        
        <!-- Interactive Full Width Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px] grid-flow-row-dense">
           <div 
              v-for="(img, idx) in project.gallery" 
              :key="idx" 
              v-reveal="idx * 50"
              @click="openLightbox(idx)"
              class="rounded-3xl relative overflow-hidden group cursor-pointer border border-line"
              :class="[
                Math.floor(idx / 5) % 2 === 0 
                  ? (idx % 5 === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1')
                  : (idx % 5 === 0 ? 'col-span-2 row-span-2 md:col-start-3' : 'col-span-1 row-span-1')
              ]"
           >
             <img :src="img" :alt="`Gallery image ${idx + 1}`" class="absolute inset-0 h-full w-full object-cover transition-transform duration-[800ms] group-hover:scale-110" />
             <div class="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20"></div>
             <div class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
               <span class="rounded-full bg-paper/90 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-ink shadow-lg">Zvětšit</span>
             </div>
           </div>
        </div>
      </div>
    </section>

    <!-- ROW 3: PARAMETERS + DEVELOPER + VOTE(BELOW) -->
    <div class="mx-auto max-w-[1600px] px-5 py-12 md:px-8 lg:px-10 flex flex-col lg:flex-row gap-16 items-start">
      
      <div class="flex-1 w-full min-w-0 flex flex-col gap-20">
        
        <!-- Informace o projektu -->
        <section v-reveal>
          <h2 class="text-3xl font-bold tracking-tight text-ink mb-12">Informace o projektu</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            
            <!-- Parametry -->
            <div>
              <h3 class="text-xs font-bold uppercase tracking-[0.3em] text-ink/45 mb-6 border-b border-line pb-4">Parametry</h3>
              <ul class="space-y-4">
                <li class="flex justify-between items-center border-b border-line/50 pb-3">
                  <span class="text-ink/70">Počet bytů</span>
                  <span class="font-bold">{{ project.parameters.flatsCount }}</span>
                </li>
                <li class="flex justify-between items-center border-b border-line/50 pb-3">
                  <span class="text-ink/70">Velikosti bytů</span>
                  <span class="font-bold">{{ project.parameters.flatSizes }}</span>
                </li>
              </ul>
            </div>

            <!-- Dopravní dostupnost -->
            <div>
              <h3 class="text-xs font-bold uppercase tracking-[0.3em] text-ink/45 mb-6 border-b border-line pb-4">Dopravní dostupnost a vybavenost</h3>
              <ul class="space-y-4">
                <li class="flex justify-between items-center border-b border-line/50 pb-3">
                  <span class="text-ink/70">Bus</span>
                  <span class="font-bold">{{ project.parameters.amenities.bus }}</span>
                </li>
                <li class="flex justify-between items-center border-b border-line/50 pb-3">
                  <span class="text-ink/70">Vlak</span>
                  <span class="font-bold">{{ project.parameters.amenities.train }}</span>
                </li>
                <li class="flex justify-between items-center border-b border-line/50 pb-3">
                  <span class="text-ink/70">Nemocnice / poliklinika</span>
                  <span class="font-bold">{{ project.parameters.amenities.hospital }}</span>
                </li>
                <li class="flex justify-between items-center border-b border-line/50 pb-3">
                  <span class="text-ink/70">Škola</span>
                  <span class="font-bold">{{ project.parameters.amenities.school }}</span>
                </li>
                <li class="flex justify-between items-center border-b border-line/50 pb-3">
                  <span class="text-ink/70">Park</span>
                  <span class="font-bold">{{ project.parameters.amenities.park }}</span>
                </li>
              </ul>
            </div>

            <!-- Příslušenství -->
            <div class="md:col-span-2 mt-4">
              <h3 class="text-xs font-bold uppercase tracking-[0.3em] text-ink/45 mb-6 border-b border-line pb-4">Příslušenství</h3>
              <ul class="grid grid-cols-2 md:grid-cols-3 gap-6 text-ink/80">
                <li class="flex items-center gap-3">
                  <div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-colors" :class="project.parameters.features.garage ? 'bg-ink text-paper border-ink' : ''">
                    <svg v-if="project.parameters.features.garage" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span class="font-bold text-sm text-ink">Garáže</span>
                </li>
                <li class="flex items-center gap-3">
                  <div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-colors" :class="project.parameters.features.parking ? 'bg-ink text-paper border-ink' : ''">
                    <svg v-if="project.parameters.features.parking" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span class="font-bold text-sm text-ink">Parkovací stání</span>
                </li>
                <li class="flex items-center gap-3">
                  <div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-colors" :class="project.parameters.features.cellar ? 'bg-ink text-paper border-ink' : ''">
                    <svg v-if="project.parameters.features.cellar" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span class="font-bold text-sm text-ink">Sklepní kóje / sklad</span>
                </li>
                <li class="flex items-center gap-3">
                  <div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-colors" :class="project.parameters.features.playground ? 'bg-ink text-paper border-ink' : ''">
                    <svg v-if="project.parameters.features.playground" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span class="font-bold text-sm text-ink">Hřiště</span>
                </li>
                <li class="flex items-center gap-3">
                  <div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-colors" :class="project.parameters.features.reception ? 'bg-ink text-paper border-ink' : ''">
                    <svg v-if="project.parameters.features.reception" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span class="font-bold text-sm text-ink">Recepce</span>
                </li>
                <li class="flex items-center gap-3">
                  <div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-colors" :class="project.parameters.features.elevator ? 'bg-ink text-paper border-ink' : ''">
                    <svg v-if="project.parameters.features.elevator" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span class="font-bold text-sm text-ink">Výtah</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- O Developerovi -->
        <section v-reveal="100" class="rounded-[2.5rem] border border-line bg-canvas p-8 md:p-12 mb-10 relative overflow-hidden">
          <div class="absolute right-0 top-0 opacity-5 pointer-events-none">
             <svg class="w-64 h-64 -mt-10 -mr-10" fill="currentColor" viewBox="0 0 100 100"><path d="M0 0L50 50L100 0V100L50 50L0 100V0Z"/></svg>
          </div>
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-ink/45 mb-8 relative z-10">Developer</p>
          
          <div class="flex flex-col sm:flex-row sm:items-center gap-6 mb-10 relative z-10">
            <div class="flex items-center justify-center h-24 w-24 rounded-2xl bg-line/50 text-ink/80 font-bold text-3xl uppercase shrink-0 border border-ink/10 shadow-sm">
              {{ project.developer.logo }}
            </div>
            <h2 class="text-4xl font-bold tracking-tight text-ink">{{ project.developer.name }}</h2>
          </div>

          <div class="grid lg:grid-cols-[1.2fr_1fr] gap-12 relative z-10">
            <div>
              <h3 class="text-lg font-bold mb-4 text-ink">O developerovi</h3>
              <p class="text-ink/80 leading-relaxed text-sm md:text-base">
                {{ project.developer.about }}
              </p>
            </div>
            <div class="lg:border-l lg:border-line/50 lg:pl-12">
              <h3 class="text-lg font-bold mb-4 text-ink">Kontakt</h3>
              <ul class="space-y-4 text-ink/80 text-sm md:text-base">
                <li class="font-bold text-ink text-base">{{ project.developer.address }}</li>
                <li class="flex items-center gap-3">
                  <span class="w-20 font-bold uppercase text-xs tracking-widest text-ink/50">Telefon</span> 
                  <span class="font-bold">{{ project.developer.phone }}</span>
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-20 font-bold uppercase text-xs tracking-widest text-ink/50">E-mail</span> 
                  <span class="font-bold">{{ project.developer.email }}</span>
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-20 font-bold uppercase text-xs tracking-widest text-ink/50">Web</span> 
                  <a :href="project.developer.web" target="_blank" class="font-bold text-ink underline transition hover:text-ink/60">{{ project.developer.web }}</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

      </div>

      <!-- RIGHT COLUMN (Sticky Vote Repeat for layout symmetry mostly, but also active voting) -->
      <aside class="w-full lg:w-[420px] shrink-0 lg:sticky top-32 z-10">
        <div class="rounded-3xl border border-ink bg-ink p-8 md:p-10 text-paper shadow-2xl">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-paper/50">Hlasovat</p>
          <h2 class="mt-4 text-3xl font-bold tracking-[-0.04em]">Dejte svůj hlas tomuto projektu.</h2>
          <p class="mt-4 text-sm leading-relaxed text-paper/72">
            Níže zadejte svou e-mailovou adresu. Zašleme Vám potvrzovací odkaz k ověření Vašeho hlasu.
          </p>

          <form class="mt-8 space-y-4" @submit.prevent="submitVote">
            <label class="block text-xs font-bold uppercase tracking-[0.18em] text-paper/60" for="vote-email-2">
              E-mailová adresa
            </label>
            <input
              id="vote-email-2"
              v-model="email"
              type="email"
              placeholder="jmeno@email.cz"
              class="w-full rounded-full border border-paper/20 bg-paper/10 px-6 py-4 text-base font-bold text-paper outline-none transition placeholder:text-paper/35 focus:border-paper"
              required
            />
            <button
              type="submit"
              class="w-full rounded-full border border-paper bg-paper px-6 py-5 text-xs font-bold uppercase tracking-[0.2em] text-ink transition hover:bg-transparent hover:text-paper shadow-sm mt-4"
            >
              Hlasovat
            </button>
          </form>

          <p v-if="voteSubmitted" class="mt-5 rounded-soft border border-paper/20 bg-paper/10 px-5 py-4 text-sm font-bold leading-relaxed text-paper/78">
            Demo potvrzení odesláno na {{ email }}.
          </p>
        </div>
      </aside>

    </div>

    <!-- ROW 4: RELATED PROJECTS -->
    <section class="mx-auto max-w-[1600px] px-5 pt-20 md:px-8 lg:px-10 border-t border-line mt-10">
      <div v-reveal class="mb-12">
        <p class="text-xs uppercase tracking-[0.32em] text-ink/45 font-bold">Podobné projekty</p>
        <h2 class="mt-5 text-4xl font-medium tracking-[-0.04em] text-ink md:text-5xl">
          Objevte další nominace
        </h2>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ProjectCard v-for="(related, i) in relatedProjects" :key="related.slug" :project="related" v-reveal="i * 100" />
      </div>

      <div v-reveal class="mt-16 flex justify-center">
        <RouterLink
          to="/projekty"
          class="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-ink bg-ink px-12 py-5 text-xs font-bold uppercase tracking-[0.25em] text-paper shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <span class="relative z-10 transition-colors duration-300 group-hover:text-ink">Všechny projekty</span>
          <div class="absolute inset-0 z-0 h-full w-full translate-y-full bg-paper transition-transform duration-300 ease-out group-hover:translate-y-0"></div>
        </RouterLink>
      </div>
    </section>

  </div>

  <section v-else class="mx-auto max-w-[1600px] px-5 py-20 md:px-8 lg:px-10 lg:py-28 -mt-24 pt-44 md:-mt-28 bg-paper">
    <div class="rounded-card border border-line bg-paper p-10">
      <p class="text-xs uppercase tracking-[0.3em] text-ink/45 font-bold">Detail projektu</p>
      <h1 class="mt-5 text-4xl font-bold tracking-[-0.04em] text-ink">Tento projekt nebyl nalezen.</h1>
      <p class="mt-5 max-w-2xl text-base leading-7 text-ink/68">
        Cesta sice existuje, ale tento záznam chybí v aktuálních datech užšího výběru.
      </p>
      <RouterLink
        to="/projekty"
        class="mt-8 inline-flex rounded-full border border-ink bg-ink px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-paper transition hover:-translate-y-1 shadow-md"
      >
        Zpět na projekty
      </RouterLink>
    </div>
  </section>
</template>
