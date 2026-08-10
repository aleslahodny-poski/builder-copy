<script setup lang="ts">
import { RouterLink } from 'vue-router'

import BrandMark from '@/components/BrandMark.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { featuredProjects, juryChairs, newsItems, organizers, timelineItems } from '@/data/site'

// Statický snímek z galavečera místo videa — původní video bylo z jiné akce
// a klientský .mov má ve 4K 780 MB. Odbarveno, aby sedlo do palety.
import heroStill from '@/assets/hero-still.jpg'
</script>

<template>
  <div>
    <!-- 1. Hero -->
    <section class="mx-auto max-w-[1600px] px-5 pt-6 md:px-8 lg:px-10">
      <div class="relative overflow-hidden rounded-shell border border-line bg-ink text-paper">
        <div class="absolute inset-0">
          <img
            :src="heroStill"
            alt="Galavečer Realitního projektu roku"
            class="h-full w-full object-cover"
          />
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/30 md:to-transparent"
          />
        </div>

        <div class="relative grid min-h-[78vh] items-end">
          <div class="z-10 px-6 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16 lg:py-20">
            <p v-reveal class="text-label uppercase tracking-[0.34em] text-paper/70 font-bold">
              Soutěž v oblasti realit a developmentu
            </p>
            <h1 v-reveal="100" class="mt-6 max-w-4xl text-display font-medium tracking-[-0.04em]">
              Realitní<br />projekt roku
            </h1>
            <p v-reveal="200" class="mt-6 max-w-2xl text-body leading-8 text-paper/70 md:text-lead">
              18. ročník největší přehlídky rezidenčního bydlení v České republice. Objevte
              špičkovou architekturu a podpořte svůj oblíbený projekt.
            </p>

            <div v-reveal="300" class="mt-10 flex flex-wrap items-center gap-4">
              <RouterLink
                to="/projekty"
                class="inline-flex items-center justify-center rounded-full border border-accent bg-accent px-8 py-4 text-label font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-transparent hover:text-accent shadow-sm"
              >
                HLASOVAT
              </RouterLink>
              <RouterLink
                to="/pro-developery"
                class="inline-flex items-center justify-center rounded-full border border-paper/30 bg-transparent px-8 py-4 text-label font-bold uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:border-paper hover:bg-paper/10 shadow-sm"
              >
                PŘIHLÁSIT PROJEKT
              </RouterLink>
            </div>

            <div class="mt-14 grid gap-6 border-t border-paper/15 pt-8 sm:grid-cols-2 lg:grid-cols-3">
              <div v-reveal="400">
                <p class="text-label uppercase tracking-[0.28em] text-paper/60 font-bold">Vyhlášení</p>
                <p class="mt-3 text-h2 font-medium tracking-[-0.03em]">Leden 2027</p>
              </div>
              <div v-reveal="500">
                <p class="text-label uppercase tracking-[0.28em] text-paper/60 font-bold">Region</p>
                <p class="mt-3 text-h2 font-medium tracking-[-0.03em]">Celá ČR</p>
              </div>
              <div v-reveal="600">
                <p class="text-label uppercase tracking-[0.28em] text-paper/60 font-bold">Vítěz</p>
                <p class="mt-3 text-h2 font-medium tracking-[-0.03em]">Váš hlas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Harmonogram -->
    <section id="timeline" class="mx-auto max-w-[1600px] px-5 py-20 md:px-8 lg:px-10 lg:py-24">
      <div v-reveal class="mb-16">
        <p class="text-label uppercase tracking-[0.32em] text-secondary font-bold">Harmonogram</p>
        <h2 class="mt-5 text-h1 font-medium tracking-[-0.04em] text-ink max-w-2xl">
          Klíčové momenty ročníku 2026
        </h2>
      </div>

      <div class="relative mt-20">
        <div class="absolute top-[4px] left-0 h-px w-full bg-line hidden md:block"></div>
        <div class="absolute top-0 left-[4px] h-full w-px bg-line md:hidden"></div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
          <article
            v-for="(item, index) in timelineItems"
            :key="item.title"
            v-reveal="index * 150"
            class="relative md:pt-10 pl-10 md:pl-0"
          >
            <div class="absolute left-0 top-0 h-[9px] w-[9px] rounded-full bg-ink"></div>

            <div class="flex items-center gap-3 md:block md:space-y-4">
              <p class="text-small uppercase tracking-[0.22em] text-ink/70 font-bold">{{ item.date }}</p>
            </div>
            <div class="mt-3 md:mt-5">
              <h3 class="text-lead font-medium tracking-[-0.03em] text-ink">{{ item.title }}</h3>
              <p class="mt-2 text-small leading-6 text-ink/70">{{ item.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 3. Nominované projekty -->
    <section class="mx-auto max-w-[1600px] px-5 py-20 md:px-8 lg:px-10 lg:py-24">
      <div v-reveal class="mb-12">
        <p class="text-label uppercase tracking-[0.32em] text-secondary font-bold">
          Projekty v boji o vítězství
        </p>
        <h2 class="mt-5 text-h1 font-medium tracking-[-0.04em] text-ink">Nominované projekty</h2>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ProjectCard
          v-for="(project, i) in featuredProjects"
          :key="project.slug"
          :project="project"
          v-reveal="i * 100"
        />
      </div>

      <div v-reveal class="mt-16 flex justify-center">
        <RouterLink
          to="/projekty"
          class="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-ink bg-ink px-12 py-5 text-label font-bold uppercase tracking-[0.25em] text-paper shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <span class="relative z-10 transition-colors duration-300 group-hover:text-ink">
            Všechny projekty
          </span>
          <div
            class="absolute inset-0 z-0 h-full w-full translate-y-full bg-paper transition-transform duration-300 ease-out group-hover:translate-y-0"
          ></div>
        </RouterLink>
      </div>
    </section>

    <!-- 4. Pro developery / Pro partnery -->
    <section class="flex flex-col border-y border-line md:flex-row min-h-[500px]">
      <RouterLink
        to="/pro-developery"
        v-reveal="100"
        class="group relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-paper p-12 text-center transition-all duration-[600ms] hover:-translate-y-2 hover:shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.1)] hover:z-20 md:border-r md:border-line"
      >
        <div class="absolute inset-0 bg-ink/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
        <div class="relative z-10 flex max-w-sm flex-col items-center">
          <h2 class="mb-6 text-h1 font-bold tracking-[-0.02em] text-ink transition-transform duration-500 group-hover:scale-105">
            Pro developery
          </h2>
          <p class="mb-10 text-body leading-relaxed text-ink/70">
            Získejte odbornou validaci a mediální náskok. Vstupte do prestižního srovnání českého
            developmentu.
          </p>
          <span class="inline-flex rounded-full border border-ink bg-transparent px-8 py-3 text-label font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-paper shadow-sm">
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
          <h2 class="mb-6 text-h1 font-bold tracking-[-0.02em] text-paper transition-transform duration-500 group-hover:scale-105">
            Pro partnery
          </h2>
          <p class="mb-10 text-body leading-relaxed text-paper/70">
            Spojte svou značku s elitou trhu. Budujte strategické kontakty a získejte unikátní
            mediální prostor.
          </p>
          <span class="inline-flex rounded-full border border-paper/30 bg-paper/10 px-8 py-3 text-label font-bold uppercase tracking-[0.2em] text-paper backdrop-blur-md transition-colors duration-300 group-hover:bg-paper group-hover:text-ink shadow-sm">
            Stát se partnerem
          </span>
        </div>
      </RouterLink>
    </section>

    <!-- 5. Aktuality -->
    <section class="mx-auto max-w-[1600px] px-5 py-20 md:px-8 lg:px-10 lg:py-24">
      <div v-reveal class="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p class="text-label uppercase tracking-[0.32em] text-secondary font-bold">Co je nového</p>
          <h2 class="mt-5 text-h1 font-medium tracking-[-0.04em] text-ink">Aktuality</h2>
        </div>
        <a
          href="https://www.projektroku.cz/aktuality/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-label font-bold uppercase tracking-[0.2em] text-ink/70 underline decoration-line underline-offset-8 transition-colors hover:text-ink"
        >
          Všechny aktuality
        </a>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <a
          v-for="(item, i) in newsItems"
          :key="item.href"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          v-reveal="i * 100"
          class="group flex flex-col justify-between rounded-card border border-line bg-paper p-8 transition-all duration-300 hover:-translate-y-1 hover:border-ink/30 hover:shadow-panel"
        >
          <div>
            <p class="text-label uppercase tracking-[0.24em] text-secondary font-bold">
              {{ item.date }}
            </p>
            <h3 class="mt-5 text-h2 font-medium leading-tight tracking-[-0.03em] text-ink">
              {{ item.title }}
            </h3>
            <p class="mt-4 text-small leading-6 text-ink/70">{{ item.perex }}</p>
          </div>
          <span class="mt-8 inline-flex items-center gap-2 text-label font-bold uppercase tracking-[0.2em] text-ink">
            Číst dál
            <svg
              class="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>

    <!-- 6. O soutěži -->
    <section class="border-y border-line bg-paper">
      <div class="mx-auto grid max-w-[1600px] gap-10 px-5 py-20 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
        <div v-reveal class="self-center">
          <p class="text-label uppercase tracking-[0.32em] text-secondary font-bold">
            Realitní Projekt Roku
          </p>
          <h2 class="mt-5 text-h1 font-medium tracking-[-0.04em] text-ink">O soutěži</h2>
          <p class="mt-6 max-w-xl text-body leading-8 text-ink/70 md:text-lead">
            Realitní Projekt Roku je prestižní přehlídkou českých developerských projektů v
            jednotlivých regionech České republiky. Naším cílem je zviditelnit kvalitní projekty na
            trhu a navázat na tradici sedmnácti úspěšných ročníků, které reflektují různorodost a
            kvalitu moderního developmentu.
          </p>
          <div class="mt-10">
            <a
              href="https://fotky.pixellu.gallery/realitn-projekt-roku-2025/all"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex items-center gap-3 rounded-full border border-ink bg-transparent px-8 py-4 text-label font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-ink hover:text-paper shadow-sm"
            >
              Fotogalerie ročníku 2025
              <svg
                class="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="grid gap-6 sm:grid-cols-2">
          <article
            v-for="(organizer, i) in organizers"
            :key="organizer.name"
            v-reveal="i * 200"
            class="rounded-card border border-line bg-canvas p-4"
          >
            <div class="aspect-[4/5] overflow-hidden rounded-card border border-line bg-muted">
              <img :src="organizer.image" :alt="organizer.name" class="h-full w-full object-cover" />
            </div>
            <div class="pt-5">
              <h3 class="text-h2 font-medium tracking-[-0.03em] text-ink">{{ organizer.name }}</h3>
              <p class="mt-2 text-label uppercase tracking-[0.24em] font-bold text-ink/70">
                {{ organizer.role }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 7. Předsedové poroty -->
    <section class="mx-auto max-w-[1600px] px-5 py-20 md:px-8 lg:px-10 lg:py-24">
      <div v-reveal class="mb-12">
        <p class="text-label uppercase tracking-[0.32em] text-secondary font-bold">Kdo rozhoduje</p>
        <h2 class="mt-5 text-h1 font-medium tracking-[-0.04em] text-ink">Předsedové poroty</h2>
        <p class="mt-6 max-w-2xl text-body leading-8 text-ink/70">
          Vítěze vybírají dvě nezávislé poroty. Třetí ocenění, Cena veřejnosti, vzniká výhradně
          hlasováním návštěvníků webu.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <article
          v-for="(chair, i) in juryChairs"
          :key="chair.role"
          v-reveal="i * 150"
          class="flex gap-6 rounded-card border border-line bg-paper p-8"
        >
          <BrandMark class="h-16 w-auto shrink-0" :category="chair.category" />
          <div>
            <h3 class="text-h2 font-medium tracking-[-0.03em] text-ink">{{ chair.name }}</h3>
            <p class="mt-2 text-label uppercase tracking-[0.24em] font-bold text-secondary">
              {{ chair.role }}
            </p>
            <p class="mt-4 text-small leading-6 text-ink/70">{{ chair.bio }}</p>
            <p
              v-if="chair.placeholder"
              class="mt-4 inline-block rounded-full bg-muted px-3 py-1 text-label font-bold uppercase tracking-[0.16em] text-ink/70"
            >
              Doplní klient
            </p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
