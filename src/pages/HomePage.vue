<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import ProjectCard from '@/components/ProjectCard.vue'
import { featuredProjects, organizers, timelineItems } from '@/data/site'

// removed unused mobileVideoOpen

import heroVideo from '@/assets/video.mp4'
const heroPoster = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
const desktopVideo = ref<HTMLVideoElement | null>(null)
const isDesktopVideoPlaying = ref(true)

const mobileVideo = ref<HTMLVideoElement | null>(null)
const isMobileVideoPlaying = ref(false)

const toggleDesktopVideo = () => {
  if (desktopVideo.value) {
    if (desktopVideo.value.paused) {
      desktopVideo.value.play()
      isDesktopVideoPlaying.value = true
    } else {
      desktopVideo.value.pause()
      isDesktopVideoPlaying.value = false
    }
  }
}

const toggleMobileVideo = () => {
  if (mobileVideo.value) {
    if (mobileVideo.value.paused) {
      mobileVideo.value.play()
    } else {
      mobileVideo.value.pause()
    }
  }
}
</script>

<template>
  <div>
    <section class="mx-auto max-w-[1600px] px-5 pt-6 md:px-8 lg:px-10">
      <div class="relative overflow-hidden rounded-shell border border-line bg-ink text-paper group">
        <div class="absolute inset-0 hidden md:block">
          <video
            ref="desktopVideo"
            class="h-full w-full object-cover"
            :src="heroVideo"
            :poster="heroPoster"
            autoplay
            muted
            loop
            playsinline
          />
          <div class="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent pointer-events-none" />
        </div>

        <button
          type="button"
          class="absolute bottom-6 right-6 z-20 hidden md:block rounded-full border border-paper/40 bg-paper/10 px-4 py-2 text-xs uppercase tracking-widest text-paper backdrop-blur transition hover:bg-paper hover:text-ink opacity-0 group-hover:opacity-100 focus:opacity-100"
          @click="toggleDesktopVideo"
        >
          {{ isDesktopVideoPlaying ? 'Pozastavit' : 'Přehrát' }}
        </button>

        <div class="relative grid min-h-[78vh] items-end md:grid-cols-[1.1fr_0.9fr]">
          <div class="z-10 px-6 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16 lg:py-20">
            <p class="text-xs uppercase tracking-[0.34em] text-paper/60 font-bold">Soutěž v oblasti realit a developmentu</p>
            <h1 class="mt-6 max-w-4xl text-5xl font-medium leading-none tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.75rem]">
              Realitní<br>projekt roku
            </h1>
            <p class="mt-6 max-w-2xl text-base leading-8 text-paper/72 md:text-lg">
              18. ročník největší přehlídky rezidenčního bydlení v České republice. Objevte špičkovou architekturu a podpořte svůj oblíbený projekt.
            </p>

            <div class="mt-10 flex flex-wrap items-center gap-4">
              <RouterLink
                to="/projekty"
                class="inline-flex items-center justify-center rounded-full border border-paper bg-paper px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-transparent hover:text-paper shadow-sm"
              >
                HLASOVAT
              </RouterLink>
              <a
                href="/pro-developery"
                class="inline-flex items-center justify-center rounded-full border border-paper/30 bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:border-paper hover:bg-paper/10 shadow-sm"
              >
                PŘIHLÁSIT PROJEKT
              </a>
            </div>

            <div class="mt-14 grid gap-6 border-t border-paper/15 pt-8 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p class="text-xs uppercase tracking-[0.28em] text-paper/45 font-bold">Vyhlášení</p>
                <p class="mt-3 text-3xl font-medium tracking-[-0.03em]">Leden 2027</p>
              </div>
              <div>
                <p class="text-xs uppercase tracking-[0.28em] text-paper/45 font-bold">Region</p>
                <p class="mt-3 text-3xl font-medium tracking-[-0.03em]">Celá ČR</p>
              </div>
              <div>
                <p class="text-xs uppercase tracking-[0.28em] text-paper/45 font-bold">Vítěz</p>
                <p class="mt-3 text-3xl font-medium tracking-[-0.03em]">Váš hlas</p>
              </div>
            </div>
          </div>

          <div 
            class="relative flex aspect-video items-center justify-center md:hidden overflow-hidden bg-ink cursor-pointer" 
            @click="toggleMobileVideo"
          >
            <video
              ref="mobileVideo"
              class="absolute inset-0 h-full w-full object-cover"
              :src="heroVideo"
              :poster="heroPoster"
              playsinline
              @play="isMobileVideoPlaying = true"
              @pause="isMobileVideoPlaying = false"
              @ended="isMobileVideoPlaying = false"
            />
            <div 
              class="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent pointer-events-none transition-opacity duration-300"
              :class="isMobileVideoPlaying ? 'opacity-0' : 'opacity-100'"
            />
            <button
              type="button"
              class="z-10 rounded-full border border-paper/40 bg-ink/40 px-6 py-3 text-sm tracking-[0.16em] text-paper backdrop-blur transition-all duration-300 pointer-events-none"
              :class="isMobileVideoPlaying ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
            >
              Přehrát video
            </button>
          </div>
        </div>
      </div>
    </section>

    <section id="timeline" class="mx-auto max-w-[1600px] px-5 py-20 md:px-8 lg:px-10 lg:py-24">
      <div class="mb-16">
        <p class="text-xs uppercase tracking-[0.32em] text-ink/45 font-bold">Harmonogram</p>
        <h2 class="mt-5 text-4xl font-medium tracking-[-0.04em] text-ink md:text-5xl max-w-2xl">
          Klíčové momenty ročníku 2026
        </h2>
      </div>

      <div class="relative mt-20">
        <div class="absolute top-[4px] left-0 h-px w-full bg-ink/20 hidden md:block"></div>
        <div class="absolute top-0 left-[4px] h-full w-px bg-ink/20 md:hidden"></div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
          <article
            v-for="(item, index) in timelineItems"
            :key="item.title"
            class="relative md:pt-10 pl-10 md:pl-0"
          >
            <div class="absolute left-0 top-0 h-[9px] w-[9px] rounded-full bg-ink"></div>

            <div class="flex items-center gap-3 md:block md:space-y-4">
              <p class="text-sm uppercase tracking-[0.22em] text-ink/55 font-bold">{{ item.date }}</p>
            </div>
            <div class="mt-3 md:mt-5">
              <h3 class="text-xl font-medium tracking-[-0.03em] text-ink">{{ item.title }}</h3>
              <p class="mt-2 text-sm leading-6 text-ink/68">{{ item.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="border-y border-line bg-paper">
      <div class="mx-auto grid max-w-[1600px] gap-10 px-5 py-20 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
        <div class="self-center">
          <p class="text-xs uppercase tracking-[0.32em] text-ink/45 font-bold">Realitní Projekt Roku</p>
          <h2 class="mt-5 text-4xl font-medium tracking-[-0.04em] text-ink md:text-5xl">
            O soutěži
          </h2>
          <p class="mt-6 max-w-xl text-base leading-8 text-ink/68 md:text-lg">
            Realitní Projekt Roku je prestižní přehlídkou českých developerských projektů v jednotlivých regionech České republiky. Naším cílem je zviditelnit kvalitní projekty na trhu a navázat na tradici sedmnácti úspěšných ročníků, které reflektují různorodost a kvalitu moderního developmentu.
          </p>
          <div class="mt-10">
            <a 
              href="https://fotky.pixellu.gallery/realitn-projekt-roku-2025/all" 
              target="_blank" 
              rel="noopener noreferrer"
              class="group inline-flex items-center gap-3 rounded-full border border-ink bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-ink hover:text-paper shadow-sm"
            >
              Fotogalerie ročníku 2025
              <svg class="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <div class="grid gap-6 sm:grid-cols-2">
          <article
            v-for="organizer in organizers"
            :key="organizer.name"
            class="rounded-card border border-line bg-canvas p-4"
          >
            <div class="aspect-[4/5] overflow-hidden rounded-card border border-line bg-muted">
              <img :src="organizer.image" :alt="organizer.name" class="h-full w-full object-cover" />
            </div>
            <div class="pt-5">
              <h3 class="text-2xl font-medium tracking-[-0.03em] font-bold text-ink">{{ organizer.name }}</h3>
              <p class="mt-2 text-xs uppercase tracking-[0.24em] font-bold text-ink/50">{{ organizer.role }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-[1600px] px-5 py-20 md:px-8 lg:px-10 lg:py-24">
      <div class="mb-12">
        <p class="text-xs uppercase tracking-[0.32em] text-ink/45 font-bold">Projekty v boji o vítězství</p>
        <h2 class="mt-5 text-4xl font-medium tracking-[-0.04em] text-ink md:text-5xl">
          Nominované projekty
        </h2>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ProjectCard v-for="project in featuredProjects" :key="project.slug" :project="project" />
      </div>

      <div class="mt-16 flex justify-center">
        <RouterLink
          to="/projekty"
          class="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-ink bg-ink px-12 py-5 text-xs font-bold uppercase tracking-[0.25em] text-paper shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <span class="relative z-10 transition-colors duration-300 group-hover:text-ink">Všechny projekty</span>
          <div class="absolute inset-0 z-0 h-full w-full translate-y-full bg-paper transition-transform duration-300 ease-out group-hover:translate-y-0"></div>
        </RouterLink>
      </div>
    </section>

    <section class="flex flex-col border-y border-line md:flex-row min-h-[500px]">
      <RouterLink 
        to="/pro-developery"
        class="group relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-paper p-12 text-center transition-all duration-[600ms] hover:-translate-y-2 hover:shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.1)] hover:z-20 md:border-r md:border-line"
      >
        <div class="absolute inset-0 bg-ink/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
        <div class="relative z-10 flex max-w-sm flex-col items-center">
          <h2 class="mb-6 text-3xl font-bold tracking-[-0.02em] text-ink md:text-5xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-105">Pro developery</h2>
          <p class="mb-10 text-base leading-relaxed text-ink/70">
            Získejte odbornou validaci a mediální náskok. Vstupte do prestižního srovnání českého developmentu.
          </p>
          <span class="inline-flex rounded-full border border-ink bg-transparent px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-paper shadow-sm">
            Přihlásit projekt
          </span>
        </div>
      </RouterLink>

      <RouterLink 
        to="/pro-partnery"
        class="group relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-ink p-12 text-center text-paper transition-all duration-[600ms] hover:-translate-y-2 hover:shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.3)] hover:z-20"
      >
        <div class="absolute inset-0 bg-gradient-to-t from-paper/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
        <div class="relative z-10 flex max-w-sm flex-col items-center">
          <h2 class="mb-6 text-3xl font-bold tracking-[-0.02em] text-paper md:text-5xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105">Pro partnery</h2>
          <p class="mb-10 text-base leading-relaxed text-paper/70">
            Spojte svou značku s elitou trhu. Budujte strategické kontakty a získejte unikátní mediální prostor.
          </p>
          <span class="inline-flex rounded-full border border-paper/30 bg-paper/10 px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-paper backdrop-blur-md transition-colors duration-300 group-hover:bg-paper group-hover:text-ink shadow-sm">
            Stát se partnerem
          </span>
        </div>
      </RouterLink>
    </section>

  </div>
</template>
