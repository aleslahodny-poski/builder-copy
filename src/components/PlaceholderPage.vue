<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  eyebrow: string
  title: string
  description: string
}>()
</script>

<template>
  <section class="mx-auto max-w-[1600px] px-5 py-24 md:px-8 lg:px-10 lg:py-32">
    <div class="max-w-3xl rounded-card border border-line bg-paper p-8 md:p-12">
      <p class="text-xs uppercase tracking-[0.3em] text-ink/45">{{ eyebrow }}</p>
      <h1 class="mt-6 max-w-2xl text-4xl font-medium tracking-tight text-ink md:text-6xl">
        {{ title }}
      </h1>
      <p class="mt-6 max-w-2xl text-base leading-8 text-ink/68 md:text-lg">{{ description }}</p>

      <div class="mt-10 flex flex-wrap gap-4">
        <RouterLink
          to="/projekty"
          class="rounded-soft border border-ink bg-ink px-6 py-3 text-sm tracking-[0.16em] text-paper transition hover:bg-paper hover:text-ink"
        >
          Prozkoumat projekty
        </RouterLink>
        <RouterLink
          to="/"
          class="rounded-soft border border-line px-6 py-3 text-sm tracking-[0.16em] text-ink transition hover:border-ink"
        >
          Zpět domů
        </RouterLink>
      </div>
    </div>
  </section>
</template>
