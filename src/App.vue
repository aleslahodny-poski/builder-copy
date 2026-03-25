<script setup lang="ts">
import { RouterView } from 'vue-router'

import SiteFooter from '@/components/SiteFooter.vue'
import SiteHeader from '@/components/SiteHeader.vue'
</script>

<template>
  <div class="min-h-screen bg-canvas text-ink">
    <SiteHeader />
    <main class="pt-24 md:pt-28">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>
