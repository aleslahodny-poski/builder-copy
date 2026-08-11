<script setup lang="ts">
import { RouterLink } from 'vue-router'

import BrandMark from '@/components/BrandMark.vue'
import { contactDetails, eventTerm, groupLogos, partnerTiers } from '@/data/site'

const footerLinks = [
  { to: '/', label: 'Úvodní strana' },
  { to: '/projekty', label: 'Nominované projekty' },
  { to: '/pro-developery', label: 'Pro developery' },
  { to: '/pro-partnery', label: 'Pro partnery' },
]
</script>

<template>
  <!--
    Struktura podle referenčního screenshotu zápatí adresa.cz, ale naplněná
    obsahem soutěže — navigace mateřské skupiny sem nepatří.
    Shora dolů: partneři → termín + kontakt → loga skupiny → copyright.
  -->
  <footer class="bg-ink text-paper">
    <div class="mx-auto max-w-[1600px] px-5 md:px-8 lg:px-10">
      <!-- Partneři, v hierarchii a monochromu, čtvercový formát -->
      <div v-reveal class="py-16">
        <p class="text-label uppercase tracking-[0.3em] text-paper/60 font-bold">Partneři soutěže</p>

        <div class="mt-8 divide-y divide-paper/10">
          <div
            v-for="tier in partnerTiers"
            :key="tier.tier"
            class="grid gap-4 py-6 md:grid-cols-[190px_1fr] md:items-center md:gap-8"
          >
            <p class="text-label uppercase tracking-[0.24em] text-paper/45 font-bold">
              {{ tier.tier }}
            </p>
            <div class="flex flex-wrap gap-4">
              <div
                v-for="partner in tier.partners"
                :key="partner.name"
                class="flex aspect-square w-36 items-center justify-center rounded-soft border border-paper/15 bg-paper/5 p-5 text-center transition-colors duration-300 hover:border-paper/40"
              >
                <img
                  v-if="partner.logo"
                  :src="partner.logo"
                  :alt="partner.name"
                  class="max-h-full max-w-full object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
                  :class="partner.size"
                />
                <span v-else class="text-small font-medium leading-tight text-paper/80">
                  {{ partner.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Termín akce, kontakt a rozcestník — sloupce vedle sebe jako v referenci -->
      <div
        class="grid gap-10 border-t border-paper/15 py-16 md:grid-cols-2 md:gap-16 lg:grid-cols-[1.3fr_1fr_1fr]"
      >
        <div v-reveal>
          <p class="text-label uppercase tracking-[0.3em] text-paper/60 font-bold">
            {{ eventTerm.label }}
          </p>
          <p class="mt-5 text-h2 font-medium tracking-[-0.03em]">{{ eventTerm.title }}</p>
          <p class="mt-2 text-h1 font-medium tracking-[-0.04em] text-accent">{{ eventTerm.value }}</p>
          <p class="mt-4 max-w-md text-small leading-7 text-paper/70">{{ eventTerm.note }}</p>
        </div>

        <div v-reveal="100" class="md:border-l md:border-paper/15 md:pl-16 lg:pl-12">
          <p class="text-label uppercase tracking-[0.3em] text-paper/60 font-bold">Kontakt</p>
          <div class="mt-5 space-y-2 text-small leading-7 text-paper/80">
            <p class="text-lead font-medium text-paper">{{ contactDetails.person }}</p>
            <p>
              <a
                :href="`tel:${contactDetails.phone.replace(/\s/g, '')}`"
                class="transition-colors hover:text-accent"
              >
                {{ contactDetails.phone }}
              </a>
            </p>
            <p>
              <a
                :href="`mailto:${contactDetails.email}`"
                class="underline decoration-paper/30 underline-offset-4 transition-colors hover:text-accent"
              >
                {{ contactDetails.email }}
              </a>
            </p>
            <div class="pt-4 text-paper/70">
              <p v-for="line in contactDetails.address" :key="line">{{ line }}</p>
              <p class="pt-2">IČ: {{ contactDetails.ic }}</p>
            </div>
          </div>
        </div>

        <nav
          v-reveal="200"
          class="md:col-span-2 md:border-t md:border-paper/15 md:pt-10 lg:col-span-1 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
        >
          <p class="text-label uppercase tracking-[0.3em] text-paper/60 font-bold">Soutěž</p>
          <ul class="mt-5 space-y-3 text-small leading-7 text-paper/80">
            <li v-for="link in footerLinks" :key="link.to">
              <RouterLink :to="link.to" class="transition-colors hover:text-accent">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Loga mediální skupiny, vpravo, plus značka soutěže -->
      <div
        class="flex flex-col items-start justify-between gap-8 border-t border-paper/15 py-10 md:flex-row md:items-center"
      >
        <RouterLink
          to="/"
          class="flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
        >
          <BrandMark class="h-10 w-auto text-paper" />
          <span class="text-small font-medium leading-[1.15] tracking-[-0.02em] text-paper">
            Realitní<br />projekt<br />roku
          </span>
        </RouterLink>

        <div class="flex flex-wrap items-center gap-x-8 gap-y-5">
          <component
            :is="logo.href ? 'a' : 'div'"
            v-for="logo in groupLogos"
            :key="logo.name"
            :href="logo.href ?? undefined"
            :target="logo.href ? '_blank' : undefined"
            :rel="logo.href ? 'noopener noreferrer' : undefined"
            class="opacity-70 transition-opacity duration-300"
            :class="logo.href ? 'hover:opacity-100' : ''"
          >
            <img :src="logo.src" :alt="logo.name" :class="[logo.width, 'h-auto']" />
          </component>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-paper/15">
      <div
        class="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-5 py-6 text-label text-paper/60 md:flex-row md:px-8 lg:px-10"
      >
        <p>Realitní projekt roku&nbsp;|&nbsp;©&nbsp;2026</p>
        <a
          href="https://www.poski.com/"
          target="_blank"
          rel="noopener"
          class="group flex items-center gap-2 text-center transition-colors hover:text-paper"
        >
          <svg
            class="shrink-0 transition-opacity group-hover:opacity-80"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 123.305 595.281 595.28"
          >
            <path
              fill="currentColor"
              opacity="0.8"
              d="M595.28,420.945c0,164.11-133.529,297.64-297.64,297.64C133.53,718.585,0,585.055,0,420.945 c0-164.11,133.53-297.64,297.64-297.64c63.7,0,124.29,19.91,174.82,56.72l-45.38,49.29c-37.931-25.81-82.511-39.96-129.391-39.96 c-127.7,0-231.59,103.89-231.59,231.59c0,116.47,86.42,213.13,198.51,229.23v-129.94h33.03c54.74,0,99.25-44.521,99.25-99.27 c0-54.74-44.53-99.27-99.25-99.27c-54.74,0-99.29,44.53-99.29,99.27c0,15.79,3.66,31.05,10.69,44.84l-46.46,50.529 c-19.78-27.979-30.26-60.96-30.29-95.34c0-91.2,74.18-165.37,165.35-165.37c91.15,0,165.32,74.17,165.32,165.34 c0,79.84-56.91,146.66-132.29,162.02v67.21c112.109-16.06,198.58-112.76,198.58-229.25c0-22.83-3.5-45.29-10.021-66.91h-0.05 c-5.05-16.69-11.86-33.14-20.95-48.88c-5.67-9.79-12.03-19.05-19.01-27.79l45.01-48.89c11.62,13.53,22.17,28.01,31.19,43.65 c9.38,16.24,16.91,33.05,22.88,50.15l0.189-0.08c0.74,2.1,1.24,4.24,1.931,6.34c0.529,1.59,1.12,3.19,1.62,4.79l-0.141,0.04 C590.61,361.675,595.28,391.035,595.28,420.945z"
            ></path>
          </svg>
          <span>
            Webové stránky vytvořilo
            <strong class="font-medium text-paper/80 transition-colors group-hover:text-paper">
              Poski.com
            </strong>
          </span>
        </a>
      </div>
    </div>
  </footer>
</template>
