<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { contactDetails } from '@/data/site'
</script>

<template>
  <footer class="border-t border-line bg-paper">
    <div class="mx-auto grid max-w-[1600px] gap-12 px-5 py-16 md:grid-cols-[1.3fr_1fr_1fr] md:px-8 lg:px-10">
      <div v-reveal class="space-y-4">
        <RouterLink to="/" class="group inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-80">
          <div class="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-paper">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <span class="text-sm font-bold uppercase tracking-[0.34em] text-ink">Projekt Roku</span>
        </RouterLink>
        <p class="max-w-md text-sm leading-7 text-ink/70">
          Realitní Projekt Roku je největší celostátní soutěž zaměřená na rezidenční development v České republice. Již 18 let mapujeme a oceňujeme kvalitní bydlení napříč všemi regiony. Spojujeme odborný pohled poroty a architektů s hlasem široké veřejnosti, abychom vyzdvihli projekty, které posouvají úroveň české architektury a urbanismu kupředu.
        </p>
      </div>

      <div v-reveal="100" class="space-y-4">
        <p class="text-xs uppercase tracking-[0.3em] text-ink/55 font-bold">Kontakt</p>
        <div class="space-y-2 text-sm leading-7 text-ink/75">
          <p v-for="line in contactDetails.address" :key="line">{{ line }}</p>
          <p>Kontaktní osoba: {{ contactDetails.person }}</p>
          <a :href="`mailto:${contactDetails.email}`" class="underline decoration-line underline-offset-4">
            {{ contactDetails.email }}
          </a>
        </div>
      </div>

      <div v-reveal="200" class="space-y-4">
        <p class="text-xs uppercase tracking-[0.3em] text-ink/55 font-bold">Odkazy</p>
        <div class="flex flex-col gap-3 text-sm text-ink/75">
          <RouterLink to="/projekty" class="transition hover:text-ink">Nominované projekty</RouterLink>
          <RouterLink to="/pro-developery" class="transition hover:text-ink">Pro developery</RouterLink>
          <RouterLink to="/pro-partnery" class="transition hover:text-ink">Pro partnery</RouterLink>
          <a href="https://adresa.cz" target="_blank" rel="noreferrer" class="transition hover:text-ink">
            adresa.cz
          </a>
          <a href="https://tvize.cz" target="_blank" rel="noreferrer" class="transition hover:text-ink">
            tvize.cz
          </a>
        </div>
      </div>
    </div>

    <!-- Copyright Sub-footer -->
    <div class="border-t border-line/60">
      <div class="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-5 py-6 text-xs text-ink/60 md:flex-row md:px-8 lg:px-10">
        <p><span>Realitní projekt roku&nbsp;|&nbsp;©&nbsp;2026</span></p>
        <a href="https://www.poski.com/" target="_blank" rel="noopener" class="group flex flex-col sm:flex-row items-center gap-2 sm:gap-2 text-center sm:text-left transition-colors hover:text-ink">
          <svg class="shrink-0 transition-opacity group-hover:opacity-80" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 123.305 595.281 595.28"><path fill="#121212cc" d="M595.28,420.945c0,164.11-133.529,297.64-297.64,297.64C133.53,718.585,0,585.055,0,420.945 c0-164.11,133.53-297.64,297.64-297.64c63.7,0,124.29,19.91,174.82,56.72l-45.38,49.29c-37.931-25.81-82.511-39.96-129.391-39.96 c-127.7,0-231.59,103.89-231.59,231.59c0,116.47,86.42,213.13,198.51,229.23v-129.94h33.03c54.74,0,99.25-44.521,99.25-99.27 c0-54.74-44.53-99.27-99.25-99.27c-54.74,0-99.29,44.53-99.29,99.27c0,15.79,3.66,31.05,10.69,44.84l-46.46,50.529 c-19.78-27.979-30.26-60.96-30.29-95.34c0-91.2,74.18-165.37,165.35-165.37c91.15,0,165.32,74.17,165.32,165.34 c0,79.84-56.91,146.66-132.29,162.02v67.21c112.109-16.06,198.58-112.76,198.58-229.25c0-22.83-3.5-45.29-10.021-66.91h-0.05 c-5.05-16.69-11.86-33.14-20.95-48.88c-5.67-9.79-12.03-19.05-19.01-27.79l45.01-48.89c11.62,13.53,22.17,28.01,31.19,43.65 c9.38,16.24,16.91,33.05,22.88,50.15l0.189-0.08c0.74,2.1,1.24,4.24,1.931,6.34c0.529,1.59,1.12,3.19,1.62,4.79l-0.141,0.04 C590.61,361.675,595.28,391.035,595.28,420.945z"></path></svg>
          <span>Webové stránky vytvořilo <strong class="text-ink/80 transition-colors group-hover:text-ink">Poski.com</strong>. Tvorba webových stránek na míru.</span>
        </a>
      </div>
    </div>
  </footer>
</template>
