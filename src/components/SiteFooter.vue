<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { contactDetails } from '@/data/site'
</script>

<template>
  <footer class="border-t border-line bg-paper">
    <div class="mx-auto grid max-w-[1600px] gap-12 px-5 py-16 md:grid-cols-[1.3fr_1fr_1fr] md:px-8 lg:px-10">
      <div class="space-y-4">
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

      <div class="space-y-4">
        <p class="text-xs uppercase tracking-[0.3em] text-ink/55">Kontakt</p>
        <div class="space-y-2 text-sm leading-7 text-ink/75">
          <p v-for="line in contactDetails.address" :key="line">{{ line }}</p>
          <p>Kontaktní osoba: {{ contactDetails.person }}</p>
          <a :href="`mailto:${contactDetails.email}`" class="underline decoration-line underline-offset-4">
            {{ contactDetails.email }}
          </a>
        </div>
      </div>

      <div class="space-y-4">
        <p class="text-xs uppercase tracking-[0.3em] text-ink/55">Odkazy</p>
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
  </footer>
</template>
