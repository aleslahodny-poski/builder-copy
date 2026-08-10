<script setup lang="ts">
import { RouterLink } from 'vue-router'

import type { Project } from '@/data/site'

defineProps<{
  project: Project
}>()
</script>

<template>
  <RouterLink
    :to="`/projekty/${project.slug}`"
    class="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-paper transition duration-300 hover:-translate-y-1 hover:border-ink"
  >
    <div class="relative aspect-[4/3] overflow-hidden border-b border-line bg-muted">
      <img
        :src="project.image"
        :alt="project.name"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
    </div>

    <div class="flex flex-1 flex-col gap-5 p-5">
      <div class="space-y-3">
        <h3 class="text-h2 font-bold leading-tight text-ink">{{ project.name }}</h3>
        <p class="text-small leading-6 text-ink/70">{{ project.summary }}</p>
      </div>

      <div class="mt-auto flex items-center justify-between gap-4 border-t border-line pt-4 text-small text-ink/70">
        <span>{{ project.developer.name }}</span>
        <span>{{ project.district ?? project.region }}</span>
      </div>
    </div>
  </RouterLink>
</template>
