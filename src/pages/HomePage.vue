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
            <p class="text-xs uppercase tracking-[0.34em] text-paper/60">Soutěž v oblasti realit a developmentu</p>
            <h1 class="mt-6 max-w-4xl text-5xl font-medium leading-none tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.75rem]">
              Realitní<br>projekt roku
            </h1>
            <p class="mt-6 max-w-2xl text-base leading-8 text-paper/72 md:text-lg">
              18. ročník největší přehlídky rezidenčního bydlení v České republice. Objevte špičkovou architekturu a podpořte svůj oblíbený projekt.
            </p>

            <div class="mt-10 flex flex-wrap items-center gap-4">
              <RouterLink
                to="/projekty"
                class="rounded-soft border border-paper bg-paper px-7 py-3 text-sm tracking-[0.18em] text-ink transition hover:bg-transparent hover:text-paper"
              >
                Hlasovat
              </RouterLink>
              <a
                href="/pro-developery"
                class="rounded-soft border border-paper/25 px-7 py-3 text-sm tracking-[0.18em] text-paper/78 transition hover:border-paper hover:text-paper"
              >
                Přihlásit projekt
              </a>
            </div>

            <div class="mt-14 grid gap-6 border-t border-paper/15 pt-8 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p class="text-xs uppercase tracking-[0.28em] text-paper/45">Vyhlášení</p>
                <p class="mt-3 text-3xl font-medium tracking-[-0.03em]">Leden 2027</p>
              </div>
              <div>
                <p class="text-xs uppercase tracking-[0.28em] text-paper/45">Region</p>
                <p class="mt-3 text-3xl font-medium tracking-[-0.03em]">Celá ČR</p>
              </div>
              <div>
                <p class="text-xs uppercase tracking-[0.28em] text-paper/45">Vítěz</p>
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
        <p class="text-xs uppercase tracking-[0.32em] text-ink/45">Harmonogram</p>
        <h2 class="mt-5 text-4xl font-medium tracking-[-0.04em] text-ink md:text-5xl max-w-2xl">
          Klíčové momenty soutěžního ročníku 2026.
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
              <p class="text-sm uppercase tracking-[0.22em] text-ink/55">{{ item.date }}</p>
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
        <div>
          <p class="text-xs uppercase tracking-[0.32em] text-ink/45">Realitní Projekt Roku</p>
          <h2 class="mt-5 text-4xl font-medium tracking-[-0.04em] text-ink md:text-5xl">
            O soutěži
          </h2>
          <p class="mt-6 max-w-xl text-base leading-8 text-ink/68 md:text-lg">
            Realitní Projekt Roku je prestižní přehlídkou českých developerských projektů v jednotlivých regionech České republiky. Naším cílem je zviditelnit kvalitní projekty na trhu a navázat na tradici sedmnácti úspěšných ročníků, které reflektují různorodost a kvalitu moderního developmentu.
          </p>
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
              <h3 class="text-2xl font-medium tracking-[-0.03em] text-ink">{{ organizer.name }}</h3>
              <p class="mt-2 text-sm uppercase tracking-[0.24em] text-ink/50">{{ organizer.role }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-[1600px] px-5 py-20 md:px-8 lg:px-10 lg:py-24">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-xs uppercase tracking-[0.32em] text-ink/45">Vybrané projekty</p>
          <h2 class="mt-5 text-4xl font-medium tracking-[-0.04em] text-ink md:text-5xl">
            Projekty aktuálně v centru pozornosti.
          </h2>
        </div>

        <RouterLink
          to="/projekty"
          class="rounded-soft border border-line px-6 py-3 text-sm tracking-[0.16em] text-ink transition hover:border-ink"
        >
          Zobrazit vše
        </RouterLink>
      </div>

      <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ProjectCard v-for="project in featuredProjects" :key="project.slug" :project="project" />
      </div>
    </section>

  </div>
</template>
