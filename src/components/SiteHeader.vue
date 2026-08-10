<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import BrandMark from '@/components/BrandMark.vue'
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
        <BrandMark class="h-9 w-auto text-ink" />
        <span class="text-small font-medium leading-[1.15] tracking-[-0.02em] text-ink">
          Realitní<br />projekt<br />roku
        </span>
      </RouterLink>

      <nav class="hidden items-center gap-10 md:flex">
        <RouterLink
          v-for="item in navigationLinks"
          :key="item.href"
          :to="item.href"
          class="group relative py-1 text-label uppercase font-bold tracking-[0.18em] transition-colors duration-300"
          :class="isActive(item.href) ? 'text-ink' : 'text-ink/70 hover:text-ink'"
        >
          {{ item.label }}
          <span 
            class="absolute -bottom-1 left-0 h-[2px] bg-ink transition-all duration-300 ease-out"
            :class="isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'"
          ></span>
        </RouterLink>
        <RouterLink 
          to="/projekty" 
          class="rounded-full border border-accent bg-accent px-7 py-2.5 text-label uppercase font-bold tracking-[0.16em] text-ink shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-paper hover:border-ink hover:shadow-md"
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
            class="flex items-center justify-between rounded-card border font-bold px-5 py-4 text-label uppercase tracking-[0.14em] transition-all duration-300"
            :class="isActive(item.href) ? 'border-ink bg-ink text-paper shadow-md' : 'border-line text-ink hover:border-ink/40 hover:bg-muted'"
          >
            {{ item.label }}
            <span v-if="isActive(item.href)" class="h-1.5 w-1.5 rounded-full bg-paper"></span>
          </RouterLink>
          <RouterLink
            to="/projekty"
            class="mt-2 flex justify-center rounded-card border border-ink bg-ink px-6 py-4 text-label uppercase tracking-[0.14em] text-paper shadow-md transition-opacity active:opacity-80 font-bold"
          >
            Hlasovat
          </RouterLink>
        </nav>
      </div>
    </transition>
  </header>
</template>
