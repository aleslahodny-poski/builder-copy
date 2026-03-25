<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import ProjectCard from '@/components/ProjectCard.vue'
import { featuredProjects, organizers, timelineItems } from '@/data/site'

const mobileVideoOpen = ref(false)

const heroVideo = 'https://videos.pexels.com/video-files/8018596/8018596-sd_960_540_18fps.mp4'
const heroPoster = 'https://images.pexels.com/photos/3872487/pexels-photo-3872487.jpeg'
</script>

<template>
  <div>
    <section class="mx-auto max-w-7xl px-5 pt-6 md:px-8 lg:px-10">
      <div class="relative overflow-hidden rounded-shell border border-line bg-ink text-paper">
        <div class="absolute inset-0 hidden md:block">
          <video
            class="h-full w-full object-cover opacity-45"
            :src="heroVideo"
            :poster="heroPoster"
            autoplay
            muted
            loop
            playsinline
          />
          <div class="absolute inset-0 bg-gradient-to-r from-ink via-ink/78 to-ink/40" />
        </div>

        <div class="relative grid min-h-[78vh] items-end md:grid-cols-[1.1fr_0.9fr]">
          <div class="z-10 px-6 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16 lg:py-20">
            <p class="text-xs uppercase tracking-[0.34em] text-paper/60">Real estate & development competition</p>
            <h1 class="mt-6 max-w-4xl text-5xl font-medium leading-none tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.75rem]">
              Projekt roku
            </h1>
            <p class="mt-6 max-w-2xl text-base leading-8 text-paper/72 md:text-lg">
              A clean platform for developers to present their work and for the public to vote with confidence through verified email confirmation.
            </p>

            <div class="mt-10 flex flex-wrap items-center gap-4">
              <RouterLink
                to="/projects"
                class="rounded-soft border border-paper bg-paper px-7 py-3 text-sm tracking-[0.18em] text-ink transition hover:bg-transparent hover:text-paper"
              >
                Hlasujte
              </RouterLink>
              <a
                href="#timeline"
                class="rounded-soft border border-paper/25 px-7 py-3 text-sm tracking-[0.18em] text-paper/78 transition hover:border-paper hover:text-paper"
              >
                Timeline
              </a>
            </div>

            <div class="mt-14 grid gap-6 border-t border-paper/15 pt-8 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p class="text-xs uppercase tracking-[0.28em] text-paper/45">Award ceremony</p>
                <p class="mt-3 text-3xl font-medium tracking-[-0.03em]">January 2027</p>
              </div>
              <div>
                <p class="text-xs uppercase tracking-[0.28em] text-paper/45">Location</p>
                <p class="mt-3 text-3xl font-medium tracking-[-0.03em]">Czech Republic</p>
              </div>
              <div>
                <p class="text-xs uppercase tracking-[0.28em] text-paper/45">Format</p>
                <p class="mt-3 text-3xl font-medium tracking-[-0.03em]">Developers submit. Public votes.</p>
              </div>
            </div>
          </div>

          <div class="relative flex min-h-[320px] items-end p-6 md:hidden">
            <img :src="heroPoster" alt="Contemporary development exterior" class="absolute inset-0 h-full w-full object-cover opacity-45 grayscale" />
            <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            <button
              type="button"
              class="relative rounded-full border border-paper/40 bg-paper/10 px-6 py-3 text-sm tracking-[0.16em] text-paper backdrop-blur transition hover:bg-paper hover:text-ink"
              @click="mobileVideoOpen = true"
            >
              Play video
            </button>
          </div>
        </div>
      </div>
    </section>

    <section id="timeline" class="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-10 lg:py-24">
      <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p class="text-xs uppercase tracking-[0.32em] text-ink/45">Timeline</p>
          <h2 class="mt-5 text-4xl font-medium tracking-[-0.04em] text-ink md:text-5xl">
            Key moments from submission to the award night.
          </h2>
        </div>

        <div class="space-y-5">
          <article
            v-for="(item, index) in timelineItems"
            :key="item.title"
            class="grid gap-4 rounded-card border border-line bg-paper p-6 md:grid-cols-[120px_1fr] md:gap-8"
          >
            <div class="flex items-center gap-4 md:block">
              <span class="text-xs uppercase tracking-[0.3em] text-ink/40">{{ String(index + 1).padStart(2, '0') }}</span>
              <p class="text-sm uppercase tracking-[0.22em] text-ink/55 md:mt-5">{{ item.date }}</p>
            </div>
            <div>
              <h3 class="text-2xl font-medium tracking-[-0.03em] text-ink">{{ item.title }}</h3>
              <p class="mt-3 max-w-2xl text-base leading-7 text-ink/68">{{ item.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="border-y border-line bg-paper">
      <div class="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
        <div>
          <p class="text-xs uppercase tracking-[0.32em] text-ink/45">About the organizers</p>
          <h2 class="mt-5 text-4xl font-medium tracking-[-0.04em] text-ink md:text-5xl">
            A small curatorial team behind the competition.
          </h2>
          <p class="mt-6 max-w-xl text-base leading-8 text-ink/68 md:text-lg">
            The platform is designed to spotlight architecture, development quality, and public trust. Every shortlisted project is presented clearly, with room for careful comparison rather than distraction.
          </p>
        </div>

        <div class="grid gap-6 sm:grid-cols-2">
          <article
            v-for="organizer in organizers"
            :key="organizer.name"
            class="rounded-card border border-line bg-canvas p-4"
          >
            <div class="aspect-[4/5] overflow-hidden rounded-card border border-line bg-muted">
              <img :src="organizer.image" :alt="organizer.name" class="h-full w-full object-cover grayscale" />
            </div>
            <div class="pt-5">
              <h3 class="text-2xl font-medium tracking-[-0.03em] text-ink">{{ organizer.name }}</h3>
              <p class="mt-2 text-sm uppercase tracking-[0.24em] text-ink/50">{{ organizer.role }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-10 lg:py-24">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-xs uppercase tracking-[0.32em] text-ink/45">Selected projects</p>
          <h2 class="mt-5 text-4xl font-medium tracking-[-0.04em] text-ink md:text-5xl">
            Six projects currently in focus.
          </h2>
        </div>

        <RouterLink
          to="/projects"
          class="rounded-soft border border-line px-6 py-3 text-sm tracking-[0.16em] text-ink transition hover:border-ink"
        >
          View all projects
        </RouterLink>
      </div>

      <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ProjectCard v-for="project in featuredProjects" :key="project.slug" :project="project" />
      </div>
    </section>

    <div v-if="mobileVideoOpen" class="fixed inset-0 z-[60] flex items-center justify-center bg-ink/92 px-5" @click.self="mobileVideoOpen = false">
      <div class="w-full max-w-4xl overflow-hidden rounded-card border border-paper/20 bg-ink">
        <div class="flex items-center justify-between border-b border-paper/10 px-5 py-4 text-sm uppercase tracking-[0.2em] text-paper/70">
          <span>Competition film</span>
          <button type="button" class="rounded-soft border border-paper/20 px-3 py-2 text-xs" @click="mobileVideoOpen = false">
            Close
          </button>
        </div>
        <video class="h-full w-full" :src="heroVideo" controls autoplay playsinline />
      </div>
    </div>
  </div>
</template>
