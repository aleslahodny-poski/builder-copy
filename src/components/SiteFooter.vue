<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { contactDetails } from '@/data/site'
</script>

<template>
  <footer class="border-t border-line bg-paper">
    <div class="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.3fr_1fr_1fr] md:px-8 lg:px-10">
      <div class="space-y-4">
        <p class="text-xs uppercase tracking-[0.3em] text-ink/55">[LOGO]</p>
        <p class="max-w-md text-sm leading-7 text-ink/70">
          A minimalist awards platform for development projects, public voting, and a carefully curated shortlist.
        </p>
      </div>

      <div class="space-y-4">
        <p class="text-xs uppercase tracking-[0.3em] text-ink/55">Contact</p>
        <div class="space-y-2 text-sm leading-7 text-ink/75">
          <p v-for="line in contactDetails.address" :key="line">{{ line }}</p>
          <p>Contact person: {{ contactDetails.person }}</p>
          <a :href="`mailto:${contactDetails.email}`" class="underline decoration-line underline-offset-4">
            {{ contactDetails.email }}
          </a>
        </div>
      </div>

      <div class="space-y-4">
        <p class="text-xs uppercase tracking-[0.3em] text-ink/55">Links</p>
        <div class="flex flex-col gap-3 text-sm text-ink/75">
          <RouterLink to="/projects" class="transition hover:text-ink">View projects</RouterLink>
          <RouterLink to="/for-developers" class="transition hover:text-ink">For Developers</RouterLink>
          <RouterLink to="/for-partners" class="transition hover:text-ink">For Partners</RouterLink>
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
