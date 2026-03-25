<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { navigationLinks } from '@/data/site'

const route = useRoute()
const mobileMenuOpen = ref(false)

const isActive = computed(() => (href: string) => {
  if (href === '/') {
    return route.path === href
  }

  return route.path.startsWith(href)
})

watch(
  () => route.fullPath,
  () => {
    mobileMenuOpen.value = false
  },
)
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-canvas/95 backdrop-blur">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-10">
      <RouterLink to="/" class="text-sm font-semibold tracking-[0.34em] text-ink transition hover:opacity-70">
        [LOGO]
      </RouterLink>

      <nav class="hidden items-center gap-8 md:flex">
        <RouterLink
          v-for="item in navigationLinks"
          :key="item.href"
          :to="item.href"
          class="text-sm tracking-[0.14em] text-ink/68 transition hover:text-ink"
          :class="isActive(item.href) ? 'text-ink' : ''"
        >
          {{ item.label }}
        </RouterLink>
        <RouterLink to="/projects" class="rounded-soft border border-ink bg-ink px-5 py-2 text-sm tracking-[0.14em] text-paper transition hover:bg-paper hover:text-ink">
          Hlasujte
        </RouterLink>
      </nav>

      <button
        type="button"
        class="rounded-soft border border-line px-4 py-2 text-xs uppercase tracking-[0.18em] text-ink md:hidden"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        {{ mobileMenuOpen ? 'Close' : 'Menu' }}
      </button>
    </div>

    <div v-if="mobileMenuOpen" class="border-t border-line bg-canvas px-5 py-4 md:hidden">
      <nav class="flex flex-col gap-3">
        <RouterLink
          v-for="item in navigationLinks"
          :key="item.href"
          :to="item.href"
          class="rounded-soft border px-4 py-3 text-sm tracking-[0.14em]"
          :class="isActive(item.href) ? 'border-ink bg-ink text-paper' : 'border-line text-ink'"
        >
          {{ item.label }}
        </RouterLink>
        <RouterLink
          to="/projects"
          class="rounded-soft border border-ink bg-ink px-4 py-3 text-sm tracking-[0.14em] text-paper"
        >
          Hlasujte
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
