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
  <header class="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-canvas/90 backdrop-blur-md">
    <div class="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-8 lg:px-10">
      <RouterLink to="/" class="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-80">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-paper">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <span class="text-sm font-bold uppercase tracking-[0.34em] text-ink">Projekt Roku</span>
      </RouterLink>

      <nav class="hidden items-center gap-10 md:flex">
        <RouterLink
          v-for="item in navigationLinks"
          :key="item.href"
          :to="item.href"
          class="group relative py-1 text-xs uppercase font-bold tracking-[0.18em] transition-colors duration-300"
          :class="isActive(item.href) ? 'text-ink' : 'text-ink/60 hover:text-ink'"
        >
          {{ item.label }}
          <span 
            class="absolute -bottom-1 left-0 h-[2px] bg-ink transition-all duration-300 ease-out"
            :class="isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'"
          ></span>
        </RouterLink>
        <RouterLink 
          to="/projekty" 
          class="rounded-full border border-ink bg-ink px-7 py-2.5 text-xs uppercase font-bold tracking-[0.16em] text-paper shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-paper hover:text-ink hover:shadow-md"
        >
          Hlasovat
        </RouterLink>
      </nav>

      <button
        type="button"
        class="group relative flex h-10 w-10 flex-col items-center justify-center gap-[4px] rounded-full border border-line bg-canvas transition-colors duration-300 hover:bg-muted md:hidden"
        @click="mobileMenuOpen = !mobileMenuOpen"
        aria-label="Toggle menu"
      >
        <span 
          class="h-[1.5px] w-[18px] bg-ink transition-all duration-300"
          :class="mobileMenuOpen ? 'translate-y-[5.5px] rotate-45' : ''"
        ></span>
        <span 
          class="h-[1.5px] w-[18px] bg-ink transition-all duration-300"
          :class="mobileMenuOpen ? 'opacity-0' : ''"
        ></span>
        <span 
          class="h-[1.5px] w-[18px] bg-ink transition-all duration-300"
          :class="mobileMenuOpen ? '-translate-y-[5.5px] -rotate-45' : ''"
        ></span>
      </button>
    </div>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="-translate-y-4 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-4 opacity-0"
    >
      <div v-if="mobileMenuOpen" class="absolute inset-x-0 top-full border-b border-line bg-canvas px-5 py-6 shadow-lg md:hidden">
        <nav class="flex flex-col gap-4">
          <RouterLink
            v-for="item in navigationLinks"
            :key="item.href"
            :to="item.href"
            class="flex items-center justify-between rounded-card border font-bold px-5 py-4 text-xs uppercase tracking-[0.14em] transition-all duration-300"
            :class="isActive(item.href) ? 'border-ink bg-ink text-paper shadow-md' : 'border-line text-ink hover:border-ink/40 hover:bg-muted'"
          >
            {{ item.label }}
            <span v-if="isActive(item.href)" class="h-1.5 w-1.5 rounded-full bg-paper"></span>
          </RouterLink>
          <RouterLink
            to="/projekty"
            class="mt-2 flex justify-center rounded-card border border-ink bg-ink px-6 py-4 text-xs uppercase tracking-[0.14em] text-paper shadow-md transition-opacity active:opacity-80 font-bold"
          >
            Hlasovat
          </RouterLink>
        </nav>
      </div>
    </transition>
  </header>
</template>
